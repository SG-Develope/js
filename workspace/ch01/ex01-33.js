/*
반환값이 있는 함수
*/

/**
 * 10과 100의 합계를 출력하는 함수
 */
function add() {
  const n1 = 10;
  const n2 = 100;
  console.log(`${n1} + ${n2} = ${n1 + n2}`);
}

add(); //10 + 100 = 110
add(); //10 + 100 = 110

/**
 * 전달받은 숫자와 100의 합계를 출력하는 함수
 */
function add100(n1 = 0) {
  const n2 = 100;
  if (typeof n1 !== "number") {
    console.log("숫자값으로 입력해주세요");
  } else {
    console.log(`${n1} + ${n2} = ${n1 + n2}`);
  }
}

add100(20); // 20 + 100 = 120
add100(30); // 30 + 100 = 130
add100(); 
add100("ㅇㄹ"); 
/**
 * 전달받은 두 숫자의 합계를 출력하는 함수
 */
function sum(n1 = 0, n2 = 0) {
  if (typeof n1 !== "number" || typeof n2 !== "number") {
    console.log("숫자값으로 입력해주세요");
  } else {
    console.log(`${n1} + ${n2} = ${n1 + n2}`);
  }
}

sum(40, 50); //40 + 50 = 90
sum();
sum("ㅇㄹ"); 


function getSum(n1, n2) {
  return `${n1} + ${n2} = ${n1 + n2}`;
}

const returnValue = getSum(60,70);

console.log(returnValue);
