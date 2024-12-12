import { parseCommaSeparatedString } from '../utility/parser/parsing.js';

export default class Menu {
  constructor(menus) {
    this.menuList = [];
    const categoryList = Object.keys(menus);
    categoryList.forEach((category) => {
      this.menuList.push({
        category,
        menu: parseCommaSeparatedString(menus[category]),
      });
    });
  }
}
