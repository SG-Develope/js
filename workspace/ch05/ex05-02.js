/*
 * + 버튼을 누르면 count 값을 1씩 증가
 */

const countSpan = document.querySelector("#container > span");
const btn = document.querySelector("#container > button");

function plus() {
  const currVal = parseInt(countSpan.lastChild.nodeValue);
  const nextVal = currVal + 1;
  countSpan.firstChild.nodeValue = nextVal;
}

btn.addEventListener("click", plus);

setTimeout(() => {
  btn.removeEventListener("click", plus);
}, 1000 * 10);
