/*
대입 연산자 =, +=, -=, *=, /=, %=, **=
*/

var age = 20;
var year = 3 + 2;

console.log(age, year);

//age에 year를 더한 값을 다시 age에 대입
var age = 20;
var year = 3 + 2; // year = 5
age = age + year; // age = 20 + 5 = 25
age += year; // age = age + year = 25 + 5 = 30