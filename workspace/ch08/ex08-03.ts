// 에러 핸들링 - try...catch 문으로 에러 처리 1
// ex08-02.ts 복사

(() => {
  console.log("1.f1 실행 완료.");

  function f1() {
    try {
      const fn = new Function("return 10;"); //Reference Error
      console.log("2.f1 실행 완료.",fn());
    } catch (err) {
      if (err instanceof Error) {
        //타입가드
        console.error(err.message);
      }
    } finally {
      console.log("try..catch끝남");
    }
  }

  function f2() {
    f1();
    console.log("4.f2 실행 완료.");
  }

  f2();
  console.log("5. 프로그램 정상 종료");
})();
