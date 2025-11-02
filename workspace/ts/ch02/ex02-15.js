/*
* 함수 호출 방법 2 - 메서드
  - this는 메서드를 정의한 객체
*/

const getPingName = function () {
  return this.pingName;
};

const haru = new Object();
haru.pingName = "하루핑";
haru.age = 5;
haru.getName = getPingName;

const namu = {
  pingName: "나무핑",
  age: 8,
  getName: getPingName,
};

//함수 호출 방법 1 - 일반 함수로 호출
console.log(getPingName()); //this = window

//함수 호출 방법 2- 메소드
console.log(haru.age, haru.getName()); //this = haru
console.log(namu.age, namu.getName()); // this = namu
