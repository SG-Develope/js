/*
구조 분해 할당(Destructuring assignment)
*/

const foo = ["yellow", "green", "blue"];

let a, b = 3;

const one = foo[0];
const two = foo[1];
const three = foo[2];

//구조분해할당 
const [test1, test2, test3] = foo;

console.log(one, two, three);
console.log(test1, test2, test3);

console.log(a, b);