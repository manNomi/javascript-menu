export default class Coach {
  constructor(name) {
    this.name = name;
    this.badMenu = [];
    this.selectFood = [];
  }

  getName() {
    return this.name;
  }

  getResultFood() {
    return this.selectFood;
  }

  addBadFood(badMenu) {
    this.badMenu = badMenu;
  }

  addFood(food) {
    this.selectFood.push(food);
  }

  getBadFood() {
    return this.badMenu;
  }
}
