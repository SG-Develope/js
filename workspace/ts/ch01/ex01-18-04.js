/*
지정한 연산자와 숫자를 받아서 사칙 연산을 수행하는 프로그램
연산자는 +, -, * , / 만 입력 가능
잘못된 연산자를 입력할 경우 "잘못된 입력" 출력
*/
// 기본 변수 설정
let operator = "*"; // 연산자 변수
let n1 = 10; // 첫 번째 숫자
let n2 = 20; // 두 번째 숫자

// if-else 문을 사용한 사칙연산 구현

const add = `${n1} + ${n2} = `; 
const subtract = `${n1} - ${n2} = `;
const multiply = `${n1} * ${n2} = `;
const divide = `${n1} / ${n2} = `;

if (operator == "+") {
  result = n1 + n2;
  console.log(add + result);
}
else if (operator == "-") {
  result = n1 - n2;
  console.log(subtract + result);
}
else if (operator == "*") {
  result = n1 * n2;
  console.log(multiply + result);
}
else if (operator == "/") {
  result = n1 / n2;
  console.log(divide + result);
}
else {
  console.log("연산자를 +, -, * , / 안에서만 입력해주세요");
}



// 1~7 사이의 숫자를 입력받아 해당 요일을 출력하는 프로그램
// 1은 월요일, 2는 화요일, ... 7은 일요일
// 1~7 사이의 숫자가 아니면 "잘못된 요일" 출력

let day = 7;

if (day == 1) {
console.log('월요일');  
}
else if(day == 2) {
  console.log('화요일');  
}
  else if(day == 3) {
  console.log('수요일');  
}
  else if(day == 4) {
  console.log('목요일');  
}
  else if(day == 5) {
  console.log('금요일');  
}
  else if(day == 6) {
  console.log('토요일');  
}
  else if (day == 7) {
    console.log("일요일");
  }

console.log()




// if-else if 문으로 작성
// 출력 예시: 일요일



// 1 ~ 12 사이의 월을 받아서 계절을 출력하는 프로그램
// 봄: 3 ~ 5월, 여름: 6 ~ 8월, 가을: 9 ~ 11월, 겨울: 12 ~ 2월
// 1 ~ 12 사이의 숫자가 아닐 경우 "잘못된 월" 출력

let month = 9;

// if-else if 문으로 작성
// 출력 예시: 가을
const spring = month >= 3 && month <= 5;
const summer = month >= 6 && month <= 8
const Autumn = month >= 9 && month <= 11
const Winter = month == 12 && month < 3

if (spring) {
} else if (summer) {
  
} else if (Autumn) {
} else if (Winter) {
}


// if-else if 문으로 작성
// 출력 예시: 가을



