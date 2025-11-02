/*
대입 연산자 +=을 이용해서 1부터 10까지의 모든 수의 합계를 출력하세요.

출력 결과:
55
*/

// 합계를 저장할 변수를 0으로 초기화
var sum = 0;

// for ( let i = 1; i < 11; i++) {
//   console.log(sum += i);
// }

const numberList = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

for (const num of numberList) {
  console.log((sum += num));
}


// 최종 합계 출력
// console.log(sum);
