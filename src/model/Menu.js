import { parseCommaSeparatedString } from '../utility/parser/parsing.js';
import OutputView from '../View/OutputView.js';

export default class Menu {
  // menuList => [{category:이름,menus:[메뉴들]}]
  constructor(menus) {
    this.menuAllList = [];
    const categoryList = Object.keys(menus);
    categoryList.forEach((category) => {
      this.menuAllList.push({
        category,
        menuList: parseCommaSeparatedString(menus[category]),
      });
    });
  }

  getMenuList() {
    return this.menuAllList;
  }

  isInMenu(menuList, menu) {
    let isIn = false;
    menuList.forEach((menus) => {
      if (menus.menuList.includes(menu)) isIn = true;
    });
    return isIn;
  }
}
