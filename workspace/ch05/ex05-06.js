const a = document.querySelector('a');
const img = document.querySelector('img');
const input = document.querySelector('input');


console.log(a.href);
console.log(a.src);
console.log(img.width);
console.log(input.type);
console.log(input.name);

//커스텀 속성 접근
console.log(img.format); // undefined
console.log(img.getAttribute('format')); // 정상 -> png

//커스텀 속성 접근- > 이렇게 표준 속성은 바로 호출을 못함
console.log(img.getAttribute(['data-age'])); // undefined
console.log(img.getAttribute(['data-user-name'])); // undefined


console.log("dataset",img.dataset.age);
console.log("dataset",img.dataset.userName);