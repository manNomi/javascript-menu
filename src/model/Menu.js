import { Random } from '@woowacourse/mission-utils';
import { parseCommaSeparatedString } from '../utility/parser/parsing.js';

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

  getMenus(category) {
    let resultMenus;
    this.menuAllList.forEach((menuList) => {
      if (menuList.category === category) {
        resultMenus = menuList.menus;
      }
    });
    return resultMenus;
  }

  getMenuNotBad(badMenus, category) {
    let notSelect = true;
    let select;
    while (notSelect) {
      select = this.getRandomMenu(category);
      if (!badMenus.includes(select)) {
        notSelect = false;
      }
    }
    return select;
  }

  getRandomMenu(category) {
    const menus = this.getMenus(category);
    return Random.shuffle(menus);
  }
}
