import { OUTPUT_MESSAGES } from '../config/outputMessage.js';

export default class OutputService {
  constructor(outputView) {
    this.outputView = outputView;
  }

  printStart() {
    this.outputView.print(OUTPUT_MESSAGES.START_MESSSAGE);
  }

  printResult(dates, coachList, category) {
    this.outputView.print(OUTPUT_MESSAGES.MENU_RESULT_MESSSAGE);
    this.outputView.print(this.formatADD('구분', dates));
    this.outputView.print(this.formatADD('카테고리', category));
    coachList.forEach((coach) => {
      this.outputView.print(
        this.formatADD(coach.getName(), coach.getResultFood()),
      );
    });
    this.outputView.print(OUTPUT_MESSAGES.END_MESSSAGE);
  }

  formatADD(AddString, dateList) {
    const string = [AddString];
    string.push(...dateList);
    return this.formatList(string);
  }

  formatList(resultList) {
    let resultFormatString = '';
    resultList.forEach((result, index) => {
      resultFormatString += ` ${result} `;
      if (resultList.length - 1 !== index) {
        resultFormatString += '|';
      }
    });
    return `[${resultFormatString}]`;
  }
}
