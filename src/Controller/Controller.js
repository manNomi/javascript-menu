import InputView from '../View/InputView.js';
import OutputView from '../View/OutputView.js';
import InputService from '../Service/InputService.js';
import OutputService from '../Service/OutPutService.js';
import Menu from '../model/Menu.js';
import Coach from '../model/Coach.js';

class Controller {
  constructor(menu) {
    this.inputView = new InputView();
    this.outputView = new OutputView();
    this.menu = new Menu(menu);
    this.category = new Category(menu);
    // this.category = new Category(menu);
    this.inputService = new InputService(this.inputView, this.outputView);
    this.outputService = new OutputService(this.outputView);
    this.dates = ['월', '화', '수', '목', '금'];
  }

  async run() {
    this.outputService.printStart();
    const coachs = await this.inputService.inputCoach();
    const coachList = [];
    coachs.forEach((coach) => {
      const coachClass = new Coach(coach);
      coachList.push(coachClass);
    });
    for (let index = 0; index < coachList.length; index++) {
      const coach = coachList[index];
      const badMenus = await this.inputService.inputBadMenu(
        coach.getName(),
        this.menu.isInMenu,
        this.menu.getMenuList(),
      );
      coach.addBadFood(badMenus);
      this.outputView.print(coach.getBadFood());
    }
    this.dates.forEach((day) => {
      const selectCategory = this.category.getRandomCategory();
    });
  }
}

export default Controller;
