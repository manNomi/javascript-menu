export default class Coach {
  constructor(name) {
    this.name = name;
    this.badMenu = [];
  }

  getName() {
    return this.name;
  }

  addBadFood(badMenu) {
    this.badMenu = badMenu;
  }

  getBadFood() {
    return this.badMenu;
  }
}
