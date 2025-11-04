// 에러 핸들링 - try...catch 문으로 에러 처리 3
// ex08-02.ts 복사
(() => {
    function f1() {
        const fn = new Function('retrun 10;'); //Reference Error
        fn();
        console.log('1.f1 실행 완료.');
    }
    function f2() {
        f1();
        console.log('2.f2 실행 완료.');
    }
    try {
        f2();
    }
    catch (err) {
        // console.error(err);
        throw "에러 발생!";
    }
    console.log('3. 프로그램 정상 종료');
})();
export {};
