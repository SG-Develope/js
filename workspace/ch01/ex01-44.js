/*
전개 구문(Spread syntax)
*/

const state = ['orange', 'yellow', 'green'];
const newState = [];
for (let i = 0; i < state.length; i++) {
  newState[i] = state[i];
}
console.log(state, newState);
console.log(state == newState);

const a = [1, 2, 3];
const b = [...a]; // 얕은 복사

b[0] = 100;

console.log(a[0]); // 1 → 바뀌지 않음
console.log(b[0]); // 1 → 바뀌지 않음
console.log(a === b); // 1 → 바뀌지 않음


var x = 3;
console.log(window.x);  // 3 출력됨


