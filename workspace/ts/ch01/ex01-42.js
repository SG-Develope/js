/*
기본값 매개변수(Default parameters)
*/
//b가 전달되지 않을 경우 b를 0으로 계산
function sum(a, b = 0) {
  return a + b;
}


console.log(sum(10, 20));
console.log(sum(50));

