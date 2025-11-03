// 에러 핸들링 - 에러 발생으로 비정상 종료
// ex08-01.ts 복사
(() => {
    function f1() {
        // const obj = null as any;
        const obj = undefined;
        obj.fn();
        // const fn = new Function('return x'); //Reference Error
        const fn = new Function('return 10'); //Reference Error
        console.log('1.f1 실행 완료.');
    }
    function f2() {
        f1();
        console.log('2.f2 실행 완료.');
    }
    f2();
    console.log('3. 프로그램 정상 종료');
})();
export {};
