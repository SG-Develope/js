// for문을 이용해서 다양한 별찍기

/* for (let i = 0; i < 5; i++) {
  let star = ''
  for (let k = 0; k <= i; k++) {
    star+='*'
  }
  console.log(star);
}



for (let i = 1; i <= 5; i++) {
  console.log("*".repeat(i));
} */

// 반대로 별찍기 (숙제 1)
for (let i = 4; i >= 0; i--) {
  let star = "";

  for (let k = 0; k <= 4; k++) {
    star += (k >= i ? "*" : " ");
  }
  console.log(star);
}

console.log(
  "----------------------------------------------------------------------"
);
// 반대로 별찍기 (숙제 2)
for (let i = 4; i >= 0; i--) {
  let star = "";

  for (let k = 0; k <= 4; k++) {
    star = (k <= i ? "*" : " ") + star;
  }
  console.log(star);
}

console.log(
  "----------------------------------------------------------------------"
);
let lines = 5;

for (let i = 1; i <= lines; i++) {
  let space = "";
  let star = "";
  // 공백 생성
  for (let k = 0; k < lines - i; k++) {
    space += " ";
  }
  for (let k = 0; k < i * 2 - 1; k++) {
    star += "*";
  }
  console.log(space + star);
}
console.log(
  "----------------------------------------------------------------------"
);


for (let i = lines; i >= 1; i--) {
  let space = "";
  let star = "";

  // 공백 생성
  for (let k = 0; k < lines - i; k++) {
    space += " ";
  }

  // 별 생성
  for (let k = 0; k < i * 2 - 1; k++) {
    star += "*";
  }

  console.log(space + star);
}

console.log(
  "----------------------------------------------------------------------"
);
for (let j = 2; j <= 9; j++){
    let result = ''
    for (let k = 1; k <= 9; k++) {
      result += `${j} x ${k} = ${k * j}`.padEnd(12, " ");
  }
      console.log(result);
  }
