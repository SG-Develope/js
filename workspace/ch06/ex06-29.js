// 유틸리티 타입 - Readonly
(() => {
    const todo1 = {
        title: "할일1",
        content: "내용1",
    };
    todo1.content = "값 바꿔봄";
    const todo2 = {
        title: "할일1",
        content: "내용1",
    };
    //읽기 전용이라 값 못바꿈
    todo2.content = "값 바꿔봄";
    console.dir(todo1);
})();
export {};
