/* 배열 요소의 합계, 홀수의 합계, 짝수의 합계를 출력 */



const arr = [4, 5, 7, 2, 9, 8];
let sum = 0; //전체 합계
let oddSum = 0; // 홀수 합계
let evenSum = 0; // 짝수 합계


// 모든 요소의 합계 출력
for (let i = 0; i < arr.length; i++) {
  sum += arr[i];
}
console.log('모든 요소의 합계', sum);




//홀수의 합계 출력
for (const num of arr) {
  if (num % 2 !== 0) oddSum += num;
}
console.log("홀수 합계", oddSum);




//짝수의 합계 출력
for (const num in arr) {
  if (arr[num] % 2 === 0) evenSum += arr[num];
}
console.log("짝수 합계", evenSum);


qwer = 3132; //암묵적 전역변수로 변함
console.log(qwer)