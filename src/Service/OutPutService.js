import { OUTPUT_MESSAGES } from '../config/outputMessage.js';

export default class OutputService {
  constructor(outputView) {
    this.outputView = outputView;
  }

  printStart() {
    this.outputView.print(OUTPUT_MESSAGES.START_MESSSAGE);
  }
}
