// 내장 객체 Array - push(), pop()
(() => {
    const fruits = ['사과', '바나나'];
    // const newLength = '배열의 마지막 요소로 오렌지를 추가한다.';
    const newLength = fruits.push('오렌지');
    console.log(newLength, fruits); // 3 ['사과', '바나나', '오렌지']
    '배열의 마지막 요소로 딸기와 포도를 추가한다.';
    fruits.push('딸기', '포도');
    console.log(fruits); // ['사과', '바나나', '오렌지', '딸기', '포도']
    let lastFruit = fruits.pop();
    console.log(lastFruit); // 포도
    console.log(fruits); // ['사과', '바나나', '오렌지', '딸기']
    lastFruit = fruits.pop();
    console.log(lastFruit); // 딸기
    console.log(fruits); // ['사과', '바나나', '오렌지']
})();
export {};
