const btn = document.querySelector('button');
console.log(btn);
// DOM level 0 방식 (비표준 -> HTML표준);
btn.onclick = () => {
  console.log('2. 눌렀어');
}

btn.onclick = () => {
  console.log('3. 눌렀어');
}

// DOM level 2 방식 (DOM 표준);
btn.addEventListener('click', () => { 
  console.log('4. 눌렀지');
});

btn.addEventListener('click', () => { 
  console.log('5. 눌렀지');
});


// 10초 후에 이벤트 등록 취소
setTimeout(() => {
  btn.removeEventListener("click", handleClick);
}, 1000 * 10);

  btn.addEventListener("click", handleClick);

function handleClick() {
  console.log('6. 눌렀소');
}