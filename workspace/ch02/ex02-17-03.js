// ex02-17.js 복사
 
/*
* 함수 내부의 this가 상위 Scope의 this를 참조해야 하지 못하고 함수 자신의 this를 참조하는 경우
  - call을 사용해서 상위 Scope의 this를 내부에 전달
*/

var count = "323";
const myObj = {
  count: 0,
  visit: function () {
    // 방문자를 한명 증가시킨다.
    this.count++;

    const visit2 = function () {
      this.count++;
    };
    visit2.call(this);
  },
};

myObj.visit();
myObj.visit();
console.log("방문자수", myObj.count);
console.log("방문자수2", this.count);