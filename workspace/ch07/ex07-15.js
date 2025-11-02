// 내장 객체 Array - indexOf(), lastIndexOf()
(() => {
    const arr = [1, 3, 5, 8, 9, 3, 4, 5];
    console.log("첫번째 3의 위치"); // 1
    console.log("마지막 3의 위치"); // 5
    console.log("첫번째 2의 위치"); // -1
    console.log("마지막 2의 위치"); // -1
    //8을 찾아서 배열에서 제거하세요..
    const num = arr.indexOf(8);
    // const delElem = arr.splice(num,1)
    // console.log('delElem',delElem);
    // console.log(arr);
    //배열에서 8을 찾아서 제거된 새로운 배열 생성 (8은 유일한 값으로 전제)
    // const arr2 = [...arr];
    // arr2.splice(num,1);
    // console.log(arr,arr2);
    const arr2 = arr.filter((item) => item !== 8);
    console.log(arr, arr2);
})();
export {};
