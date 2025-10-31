// 주요 내장 함수 - setInterval, clearInterval
// ex07-02.ts 복사
(() => {
    console.log("시작f");
    let num = 0;
    const timeId = setInterval((n1, n2) => {
        console.log("3초 마다 실행", n1 + n2, new Date());
        num++;
        if (num == 3)
            clearTimeout(timeId);
    }, 3000, 10, 20);
    console.log("종료");
})();
export {};
