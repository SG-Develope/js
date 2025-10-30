// 맵드 타입 - 매핑 수정자

(() => {
  interface Todo {
    readonly id: String;
    title ?: String;
  }

  // interface OptionalTodo {
  //   id?:string;
  //   title?:string;
  // }

  type OptionalTodo = {
    -readonly[Prop in keyof Todo]-?: string;
  }

  const todo1 : OptionalTodo = {
    id: '12',
    title : "test"
  }

  console.log(todo1);
})();

