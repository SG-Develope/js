// 고급 타입 연산자 - keyof

(()=>{
    interface Todo {
    id: string;
    title: string;
    content: string;
  }

  //지정한 타입의 속성값을 반환
  // function getProperty(obj: Todo, key: 'id' | 'title' | 'content')  {
  //   return obj[key];
  // }
  function getProperty(obj: Todo, key: string)  {
     return obj[key as keyof Todo];
  }

  const todo : Todo = {
    id : '1',
    title : '제목1',
    content: '내용1'
  };

  console.log(getProperty(todo,'title'))
  console.log(getProperty(todo,'content'))

})();
