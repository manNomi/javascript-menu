export default class InputService {
  constructor(inputView, outputView) {
    this.inputView = inputView; // 사용자 입력 처리 객체
    this.outputView = outputView; // 사용자 출력 처리 객체
  }

  async inputProcess(inputMessage, validate) {
    while (true) {
      try {
        const inputText = await this.inputView.input(inputMessage);
        validate(inputText); // 검증 로직
        return inputText; // 검증 통과 시 반환
      } catch (error) {
        this.outputView.print(error.message); // 에러 메시지 출력
      }
    }
  }

  async inputProcessTF(inputMessage, validate) {
    while (true) {
      try {
        const inputText = await this.inputView.input(inputMessage);
        return validate(inputText); // 검증 통과 시 반환
      } catch (error) {
        this.outputView.print(error.message); // 에러 메시지 출력
      }
    }
  }

  async inputPattern(inputMessage, pattern, patternMessage) {
    return await this.inputProcess(inputMessage, (inputText) => {
      if (!pattern.test(inputText)) {
        throw new Error(`${patternMessage}: ${pattern}`);
      }
    });
  }

  async inputBoolean(inputMessage) {
    return await this.inputProcess(inputMessage, (inputText) => {
      const lowerInput = inputText.toLowerCase();
      if (lowerInput === 'yes' || lowerInput === 'y') return true;
      if (lowerInput === 'no' || lowerInput === 'n') return false;
      throw new Error(
        '유효하지 않은 입력입니다. "yes" 또는 "no"를 입력하세요.',
      );
    });
  }
}
