### 점심 메뉴 추천 - 한주

<!-- [] - 메뉴를 txt로 만들어서 파일 읽기 (Menu.js) ,(Category.js)클래스에 넣기 -->

[X] - 시작 메시지 출력 (OutputView.js)
[X] - 코치 입력 받기 (InputViewService.js)
-> [X] - 코치의 이름 (String i는 글자수: 2<=i<=4)
->[X] - 식사를 같이 하는 인원 (Int : 2<=i<=5)
[X] - 코치의 이름으로 Coach 클래스 생성 -> constructor 이름을 필드로 설정
[X] - 코치 클래스를 coachList로 배열화
[X] - 각 배열을 forEach해서 inputBadMenu 실행
[X] - 못먹는 메뉴 입력받기 (InputViewService.js)
-> [X] , 로 구분해서 입력 먹지 못하는 메뉴 없으면 빈값
-> [X] 메뉴클래스의 isInMenu함수를 이용 있는 메뉴인지 확인
[X] - 입력 받은 값을 배열화
[X] - addBadFood(menu)로 badFoodList에 add

[X] - const date = [월화수목금] date.forEach 메소드
[] - dateRecommand 함수 호출  
[X] - 월요일 카테고리 무작위 추첨 Category.getRanomCategory
-> [X] - 카테고리 클래스에는 resultCategory가 있음
-> [X] - **1이면 일식, 2면 한식, 3이면 중식, 4면 아시안, 5면 양식**을 추천 / 두번이상 나오면 다시 랜덤을 한다
[] - coach.getBadFood(category) coach.getResultFood(category)를 통해 메뉴를 가져온다
[] - category를 가져오고 menu.getMenu(badFood,resultFood,category)통해 메뉴를 가져온다
[] - coach.addResultFood(menu) 통해서 resultFood의 메뉴 추가

[] - 메뉴 추천 결과 print (OutputView)
[] - 메뉴 추천 결과 요일 출력 (OutputView)
[] - 메뉴 추천 결과 카테고리 출력 (OutputView)
[] - coach.getResultFood()를 OutputView에서 format 함수
[] - 추쳔 완료 출력 (OutputView)

월 화 수 목 금 식사 같이함

월요일 추천 - 무작위
각 코치가 월요일에 먹을 메뉴 추천
화 수 목 금 에 대해서 다음 과정 반복

-> 월요일 카테고리 정하고 메뉴 정하고 모두 되면 다음 방식
--> 같은 카테고리는 2번까지만 가능
-> 그 카테고리의 메뉴를 셔플을 통해 가져옴
-> 메뉴가 먹을 수 있다면 추가 없으면 미추가
--> 먹을 수 있다 : 같은 메뉴2번 X , 못먹는 음식 X

### 로직 예외처리

- 한주에 같은 카테고리는 최대 2회
- 각 코치에게 증복되지 않는 메뉴 추천해야함

### 예외처리

[] - 코치의 이름 (String i는 글자수: 2<=i<=4)
-> , 로 구분해서 입력 먹지 못하는 메뉴 없으면 빈값
[] - 식사를 같이 하는 인원 (Int : 2<=i<=5)
[] - 코치가 못먹는 음식 (String i는 개수: 0<=i<=2) 존재
-> , 로 구분해서 입력 먹지 못하는 메뉴 없으면 빈값
-> 추천을 못하는 경우는 고려 X

```
일식: 규동, 우동, 미소시루, 스시, 가츠동, 오니기리, 하이라이스, 라멘, 오코노미야끼
한식: 김밥, 김치찌개, 쌈밥, 된장찌개, 비빔밥, 칼국수, 불고기, 떡볶이, 제육볶음
중식: 깐풍기, 볶음면, 동파육, 짜장면, 짬뽕, 마파두부, 탕수육, 토마토 달걀볶음, 고추잡채
아시안: 팟타이, 카오 팟, 나시고렝, 파인애플 볶음밥, 쌀국수, 똠얌꿍, 반미, 월남쌈, 분짜
양식: 라자냐, 그라탱, 뇨끼, 끼슈, 프렌치 토스트, 바게트, 스파게티, 피자, 파니니
```

### 프로그래밍 요구사항

const category = categories.get(Randoms.pickNumberInRange(1, 5));

- 임의로 카테고리의 순서 또는 데이터를 변경하면 안 된다.
  **1이면 일식, 2면 한식, 3이면 중식, 4면 아시안, 5면 양식**을 추천
  ##### 추천메뉴는
- `Random.shuffle()`을 통해 임의의 순서로 섞은 후, 첫 번째 값을 사용
- 카테고리에 포함되는 메뉴 목록은 `문자열 배열` 형태로 담아 준비한다.
- 코치에게 추천할 메뉴를 정할 때 이미 추천한 메뉴, 먹지 못하는 메뉴도 포함된 리스트를 전달해야 한다.
- 추천할 수 없는 메뉴인 경우 다시 섞은 후 첫 번째 값을 사용해야 한다.
