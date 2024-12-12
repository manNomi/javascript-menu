import { parseCommaSeparatedString } from '../utility/parser/parsing.js';
import { INPUT_MESSAGES } from '../config/inputMessage.js';
import { validateCoach } from '../utility/validataor/validate.js';
import { ERROR_MESSAGES } from '../config/errorMessage.js';

export default class InputService {
  constructor(inputView, outputView) {
    this.inputView = inputView; // 사용자 입력 처리 객체
    this.outputView = outputView; // 사용자 출력 처리 객체
  }

  async inputCoach() {
    return await this.inputProcessComma(
      INPUT_MESSAGES.COACH_NAME,
      validateCoach,
    );
  }

  async inputBadMenu(isInMenu) {
    const badMenus = await this.inputProcessComma(
      INPUT_MESSAGES.COACH_BAD_FOOD,
      (inputBadMenuList) => {
        inputBadMenuList.forEach((menu) => {
          if (menu !== '' && !isInMenu(menu)) {
            throw new Error(ERROR_MESSAGES.INVALID_INPUT_MENU);
          }
        });
      },
    );
    return badMenus;
  }

  async inputProcessComma(inputMessage, validates) {
    while (true) {
      try {
        const inputText = await this.inputView.input(inputMessage);
        const parsedInput = parseCommaSeparatedString(inputText);
        validates(parsedInput);
        return parsedInput; // 검증 통과 시 반환
      } catch (error) {
        this.outputView.print(error.message); // 에러 메시지 출력
      }
    }
  }
}
