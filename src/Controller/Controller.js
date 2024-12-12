import InputView from '../View/InputView.js';
import OutputView from '../View/OutputView.js';
import InputService from '../Service/InputService.js';
import OutputService from '../Service/OutPutService.js';

class Controller {
  constructor(menu) {
    this.inputView = new InputView();
    this.outputView = new OutputView();
    this.menu = new Menu(menu);
    this.category = new Category(menu);
    this.inputService = new InputService(this.inputView, this.outputView);
    this.outputService = new OutputService(this.outputView);
  }

  async run() {}
}

export default Controller;
