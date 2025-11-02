// 1부터 10까지 홀수의 합계 출력

let sum = 0;
let i = 1;


while (i <= 10) {


  if (i % 2 !== 0) {
    sum += i;
    console.log(`${i} 와 ${sum}`);
  }
  i++;
}
console.log("1부터 10까지 홀수의 합계",sum);

  // 1부터 10까지 짝수의 합계 출력

sum = 0;
i = 1;

while (i <= 10) {
  if (i % 2 === 0) {
    sum += i;
 console.log(`${i} 와 ${sum}`);
  }
  i++;
}
console.log("1부터 10까지 짝수의 합계", sum);