// td에 click 이벤트를 추가
// 배경색을 빨간색과 원랙색으로 토글한다.

const toggles = document.querySelectorAll("td");

// toggles.forEach(td => {
//   td.addEventListener('click', (e) => {
//     if(e.target.classList.contains("red")) {
//       e.target.classList.remove('red');
//     } else {
//       e.target.classList.add('red');
//     }
//   }
// )})

//or

toggles.forEach((td) => {
  td.addEventListener("click", function () {
    this.classList.toggle("red");
  });
});

//or

const table = document.querySelector('table');
// table.addEventListener('click', function(event){
//   if(event.target.tagName === 'TD'){
//     event.target.classList.toggle('red'); // 클래스 토글
//   }
// });

const btn = document.querySelector("button");
btn.addEventListener("click", () => {
  table.innerHTML += `
    <tr>
     <td>1</td><td>2</td><td>3</td>
    </tr>
    `;
});
