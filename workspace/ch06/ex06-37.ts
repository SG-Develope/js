// 맵드 타입 - 유틸리티 타입 구현 원리

(()=>{
  interface Todo {
    id: string;
    title: string;
    content: string;
  }

  // keyof T = 'id' | 'title' | 'content'
  type Mypartial<T> = {
    [P in keyof T] ?: T[P];
  };

  type MyReadonly<T> = {
    readonly [P in keyof T] ?: T[P];
  };

  const todo1: Mypartial<Todo> = {
    id: '1',
    title: '제목1',
    // content: '내용1'

  }
  const todo2: Partial<Todo> = {
    id: '1',
    title: '제목1',
    // content: '내용1'

  }
  const todo3: MyReadonly<Partial<Todo>> = {
    title: '제목3',
    // content: '내용1'
  }
  todo3.title = '수정'
})();
