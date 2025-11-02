// ex02-01.js 복사

const num = 100; // number
const str = "hello"; // string
const obj = {}; // object
const arr = [num, str]; // object(array)

// 함수를 변수에 할당
const f1 = function () {
  console.log(this);
  return "F1";
};

// 함수를 배열의 요소로 할당
arr.push(obj);
arr.push(f1);

console.log(arr);
// 함수를 객체의 속성으로 할당(메서드)
obj.f2 = f1;
obj.f3 = function () {
  return "F3";
};

console.log(arr);
console.log(f1(), arr[3](), obj.f2(), arr[2].f());

//window
// arr
// obj
// obj

