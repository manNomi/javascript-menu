import InputView from '../View/InputView.js';
import OutputView from '../View/OutputView.js';
import InputService from '../Service/InputService.js';
import OutputService from '../Service/OutPutService.js';
import Menu from '../model/Menu.js';
import Coach from '../model/Coach.js';
import Category from '../model/Category.js';

class Controller {
  constructor(menu) {
    this.inputView = new InputView();
    this.outputView = new OutputView();
    this.menu = new Menu(menu);
    this.category = new Category(menu);
    // this.category = new Category(menu);
    this.inputService = new InputService(this.inputView, this.outputView);
    this.outputService = new OutputService(this.outputView);
    this.dates = ['월요일', '화요일', '수요일', '목요일', '금요일'];
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
    this.dates.forEach(() => {
      const selectCategory = this.category.getRandomCategory();
      coachList.forEach((coach) => {
        const selectMenu = this.menu.getMenuNotBad(
          coach.getBadFood(),
          coach.getResultFood(),
          selectCategory,
        );
        coach.addFood(selectMenu);
      });
    });
    this.outputService.printResult(
      this.dates,
      coachList,
      this.category.getCategoryList(),
    );
  }
}

export default Controller;
