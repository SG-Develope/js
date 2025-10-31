// 주요 내장 함수 - setTimeout, clearTimeout

(() => {
  console.log("시작");

  const timeId = setTimeout((n1: number, n2: number) => {
    console.log("3초 후에 실행", n1 + n2);
  }, 3000);

  console.log("종료");

  clearTimeout(timeId);
})();
