// 유틸리티 타입 - Omit

(() => {
  interface Todo {
    id: number;
    title: string;
    content: string;
    done: boolean;
    createdAt: Date;
    updatedAt: Date;
  }

  // const todo: Partial<Todo> = {
  //   title: "제목",
  //   content: "테스트",
  // };
  const todo: Omit<Todo, "createdAt" | "updatedAt"> = {
    id: 3,
    title: "제목",
    content: "테스트",
    done: true,
  };

  console.log(todo.title, todo.content);
  // console.log(todo.done)//컴파일 에러
})();
