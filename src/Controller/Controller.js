import InputView from '../View/InputView.js';
import OutputView from '../View/OutputView.js';
import InputService from '../Service/InputService.js';
import OutputService from '../Service/OutPutService.js';
import { INPUT_MESSAGES } from '../config';

class Controller {
  constructor() {
    this.inputView = new InputView();
    this.outputView = new OutputView();
    this.inputService = new InputService(this.inputView, this.outputView);
    this.outputService = new OutputService(this.outputView);
  }

  async run() {
    let isContinue = true;
    while (isContinue) {
      isContinue = await this.inputService.inputBoolean(INPUT_MESSAGES.TEXT);
    }
  }
}

export default Controller;
