// ex02-05.js 복사

/*
* 함수를 만드는 방법 1 - 함수 선언문
  - function 키워드로 시작하는 함수 정의
*/


function add(a, b) {
  console.log(this);
     return a + b;
}



// console.log(add(10, 20)); // 30


const test = {
  a: 123
}


console.log(add.call(test,10, 20)); // 30
