// 유틸리티 타입 - Pick
(() => {
    // const todo: Partial<Todo> = {
    //   title: "제목",
    //   content: "테스트",
    // };
    const todo = {
        title: "제목",
        content: "테스트",
    };
    console.log(todo.title, todo.content);
    // console.log(todo.done)//컴파일 에러
})();
export {};
