/*
유사 배열 객체
- lenth 속성을 가지고 있음
- 0부터 시작하는 인덱스와 동일한 속성을 포함
- 배열처럼 사용하지만 실체는 객체
*/

/**
 * 전달받은 배열의 몯느 요소를 인덱스와 함께 출력한다.
 * 예시) [10,20] 배여링 전달될 경우
 * 0 10
 * 1 20
 * @param {*} arr - 배열
*/

const arr = [10, 20];


printerArr(arr);

function printerArr(arr) {
  for (let i = 0; i < arr.length; i++) {
    console.log(i, arr[i]);
  }
}

// printerArr2(ardfr);

function printerArr2(arr) {
  for (const test in arr) {
    console.log(test, arr[test]);
    // 배열에는 사용하지않는다 . 순서도 보장안되고 인덱스도 문자열로 반환됌,
    //배열에 추가된 프로토타입 속성까지 순회할 수 있음 (예상치 못한 동작)
  }
}


const obj = {
  name: "Alice",
  greet: () => {

  },
};