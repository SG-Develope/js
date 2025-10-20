/*
* Partial application - 로그 함수

*/

const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9];
let result;
// result = []


// numbers.forEach((number) => {
//   if (number > 3) {
//     result.push(number);
//   }
// });

// const greaterThan = (min, x) => x > min;
// console.log(greaterThan(3, 5));

// result = numbers.filter( num => {
// greaterThan(3,num);
// });


const greaterThan = _.curry((min, x) => x > min);

result = numbers.filter(greaterThan(3));






// 3보다 큰 요소만 추출


console.log("3보다 큰 요소", result); // [4,5,6,7,8,9]

// 5보다 큰 요소만 추출
// console.log("5보다 큰 요소", result);

// 6보다 큰 요소만 추출
// console.log("6보다 큰 요소", result);

// 8보다 큰 요소만 추출
// console.log("8보다 큰 요소", result);

// console.log(result);
