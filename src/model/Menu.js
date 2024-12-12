import { parseCommaSeparatedString } from '../utility/parser/parsing.js';

export default class Menu {
  // menuList => [{category:이름,menus:[메뉴들]}]
  constructor(menus) {
    this.menuAllList = [];
    const categoryList = Object.keys(menus);
    categoryList.forEach((category) => {
      this.menuList.push({
        category,
        menuList: parseCommaSeparatedString(menus[category]),
      });
    });
  }

  isInMenu(menu) {
    this.menuAllList.forEach((menus) => {
      if (menus.menuList.includes(menu)) return true;
    });
    return false;
  }
}
