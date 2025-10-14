// ex02-13.js 복사

/*
* arguments 객체
  - 함수 내에서 arguments 변수로 접근 가능
  - 함수에 전달된 모든 인자값들을 담고 있는 컬렉션(유사 배열 객체)
  - 배열과 비슷하게 length 속성과 index로 각 인자값에 접근 가능
*/

function fn() {
  let sum = 0;

  // arguments는 유사 배열이므로, 인덱스로 접근하거나 Array로 변환해서 써야 함
  for (let i = 0; i < arguments.length; i++) {
    sum += arguments[i];
  }

  console.log(sum);
}

fn(19.1284, 20.343534);
fn();
fn(10);
fn(10, 20);
fn(10, 20, 30);
fn(10, 20, 30, 234534, 53, 54, 345, 34, 53, 45, 34);

