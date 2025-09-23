/*
기본 데이터 타입 - BigInt
*/

//number 타입으로 표현 가능한 최대값 (약 1.79e+308);
var maxNum = Number.MAX_VALUE;

//정확하게 표현 가능한 최대 정수값(약 9000조);
var maxSafeNum = Number.MAX_SAFE_INTEGER;

console.log(maxNum, "\n" + maxSafeNum);

console.log(
  maxSafeNum - 1,
  maxSafeNum,
  maxSafeNum + 1,
  maxSafeNum + 2,
  maxSafeNum + 3
);


//bigint 타입
//숫자 뒤에 'n'을 붙임
var b1 = 12345n;
//Bigin() 함수에 숫자를 전달
var b2 = BigInt(maxSafeNum);

console.log(b2 - 1n, b2, b2 + 1n, b2 + 2n, b2 + 3n);
