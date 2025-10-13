/*
나머지 매개변수(Rest parameters)
*/

function sum(n1, n2=0, ...args) {
  let result = 0;
  result = n1 + n2;
  console.log(result);
  console.log(args);
}

sum();
sum(1);
sum(1,2);
sum(1,2,3);
sum(1,2,3,4,5453,567,576,67,67,87,57,896676);


