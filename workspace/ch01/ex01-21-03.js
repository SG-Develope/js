/* 반복문 - break, continue */


const n = 1;
const m = 10;
let result = null;


/* n~m까지의 정수중에서 가장 작은 짝수를 찾아서 출력하세요 */

for (let i = n; i <= m; i++) {
  if (i % 2 === 0) {
    result = i;
    break;
  }
}
console.log(`${n} ~ ${m} 정수중 가장 작은 짝수 : `, result);