/*
변수 선언문 var, let, const
*/

/**
 * 지정한 두 수의 최대값을 반환한다.
 * @param {number} n1 
 * @param {number} n2 
 */

result = "test"

console.log("test");
function max(n1, n2) {
  const result = Math.max(n1, n2);
  return result
}

console.log(max(10, 20)); //20
console.log(max(200, 20)); //200