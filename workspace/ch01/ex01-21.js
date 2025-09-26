/*
반복문 - for문
*/

// let i = 0;
// while (i <= 10) {
//   console.log(i);
//   i++;
// }
// console.log("i : ", i);

let sum = 0;
//for문

for (let i = 0; i <= 10; i++) {
  console.log(i);
  
}
  console.log("----------------------------------------");
  for (let i = 0; i <= 10; i++) {
    console.log(sum += i);
  }
  
console.log("----------------------------------------");
sum = 0;
for (let i = 1; i <= 10; i++) {
    
  if (i % 2 !== 0) {
    sum += i;
    console.log(i,sum);
  }
}
  
console.log("----------------------------------------");
sum = 0;
for (let i = 1; i <= 10; i++) {
 if (i % 2 === 0) {
   sum += i;
   console.log(i,sum);
 }
}