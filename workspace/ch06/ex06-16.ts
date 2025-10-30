// 인터페이스 선언 병합
// ex06-15.ts 복사

(()=>{
  interface Todo {
    id: number;
    title: string;
    content: string;
  }

  interface Todo {
    done: boolean;
  }

  const todo: Todo = {
    id : 1,
    title: '인터페이스 병합',
    content: '인터페이스 병합을 해봐요',
    done: true,
  }
})();