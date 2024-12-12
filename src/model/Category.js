import { Random } from '@woowacourse/mission-utils';

export default class Category {
  // menuList => [{category:이름,menus:[메뉴들]}]
  constructor(menus) {
    this.categoryList = Object.keys(menus);
    this.resultCategory = [];
  }

  getCategoryList() {
    return this.resultCategory;
  }

  getRandomCategory() {
    let notCollect = true;
    let selectCategoryNum = 0;
    while (notCollect) {
      selectCategoryNum = Random.pickNumberInRange(
        0,
        this.categoryList.length - 1,
      );
      notCollect = this.checkTwoCategory(this.categoryList[selectCategoryNum]);
    }
    const selectCategory = this.categoryList[selectCategoryNum];
    console.log(selectCategoryNum);
    this.resultCategory.push(selectCategory);
    return selectCategory;
  }

  checkTwoCategory(randCategory) {
    let count = 0;
    this.resultCategory.forEach((category) => {
      if (category === randCategory) count += 1;
    });
    if (count >= 2) return true;
    return false;
  }
}
