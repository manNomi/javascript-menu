import InputView from '../View/InputView.js';
import OutputView from '../View/OutputView.js';
import InputService from '../Service/InputService.js';
import OutputService from '../Service/OutPutService.js';
import Menu from '../model/Menu.js';
import Coach from '../model/Coach.js';
import Category from '../model/Category.js';

class Controller {
  constructor(menu, dates) {
    this.inputView = new InputView();
    this.outputView = new OutputView();
    this.menu = new Menu(menu);
    this.category = new Category(menu);
    this.inputService = new InputService(this.inputView, this.outputView);
    this.outputService = new OutputService(this.outputView);
    this.dates = dates;
  }

  async run() {
    this.outputService.printStart();
    const coachList = await this.setCoach();
    await this.setBadMenu(coachList);
    this.recommandMenu(coachList);
    this.outputService.printResult(
      this.dates,
      coachList,
      this.category.getCategoryList(),
    );
  }

  async setCoach() {
    const coachs = await this.inputService.inputCoach();
    const coachList = [];
    coachs.forEach((coach) => {
      const coachClass = new Coach(coach);
      coachList.push(coachClass);
    });
    return coachList;
  }

  async setBadMenu(coachList) {
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
  }

  recommandMenu(coachList) {
    this.dates.forEach(() => {
      const selectCategory = this.category.getRandomCategory();
      console.log(selectCategory);
      coachList.forEach((coach) => {
        const selectMenu = this.menu.getMenuNotBad(
          coach.getBadFood(),
          coach.getResultFood(),
          selectCategory,
        );
        coach.addFood(selectMenu);
      });
    });
  }
}

export default Controller;
