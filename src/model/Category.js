import { Random } from '@woowacourse/mission-utils';

export default class Category {
  // menuList => [{category:이름,menus:[메뉴들]}]
  constructor(menus) {
    this.categoryList = Object.keys(menus);
    this.resultCategory = [];
  }

  getCategoryList() {
    return this.menuAllList;
  }

  getRandomCategory() {
    let notCollect = true;
    let selectCategoryNum = 0;
    while (notCollect) {
      selectCategoryNum = Random.pickNumberInRange(1, 5);
      notCollect = this.checkTwoCategory(this.categoryList[selectCategoryNum]);
    }
    const selectCategory = this.categoryList[selectCategoryNum];
    this.resultCategory.push(selectCategory);
    return selectCategory;
  }

  checkTwoCategory(randNum) {
    let count = 0;
    this.resultCategory.forEach((categoryNum) => {
      if (categoryNum === randNum) count += 1;
    });
    if (count >= 2) return false;
    return true;
  }
}
