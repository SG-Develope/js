function showList() {
  const todoList = [
    {
      id: 1,
      title: "JavaScript 공부",
      done: true,
    },
    {
      id: 4,
      title: "React 공부",
      done: false,
    },
    {
      id: 3,
      title: "바닐라 프로젝트",
      done: false,
    },
    {
      id: 2,
      title: "TypeScript 공부",
      done: false,
    },
    {
      id: 5,
      title: "Final 프로젝트",
      done: true,
    },
  ];

  const todoListElem = todoList.map((item) => {
    return getTodoItemElem(item);
  });
  console.log("todo", todoListElem);

  const todoListUl = document.querySelector(".todolist");
  todoListElem.forEach((itemLi) => {
    todoListUl.appendChild(itemLi);
  });
}

/**
 * Todo 아이템 객체 전달받아 화면에 표현하는 li 요소를 생성하는 함수
 * @param {Object} item  Todo 아이템 객체 {id: number, title: string, done: boolean}
 * @returns {HTMLLiElement} 생성된 Todo 아이템의 DOM 요소
 */
function getTodoItemElem(item) {
  // item -> {}
  const liElem = document.createElement("li");

  //<span>
  const noElem = document.createElement("span");
  //<span>
  const titleElem = document.createElement("span");

  //<s>
  const sElem = document.createElement("span");

  //<button>
  const deleteElem = document.createElement("button");

  // 2
  const noTxt = document.createTextNode(item.id);
  // 샘플 2
  const titleTxt = document.createTextNode(item.title);
  // 삭제
  const deleteTxt = document.createTextNode("삭제");

  // <span>2</span>
  noElem.appendChild(noTxt);

  //<span><s>샘플2</s></span>
  titleElem.appendChild(titleTxt);

  //<button type="button">삭제</button>
  deleteElem.setAttribute("type", "button");
  deleteElem.appendChild(deleteTxt);

  // <li data-no="2"></li>
  liElem.setAttribute("data-no", "2");

  liElem.appendChild(noElem);
  liElem.appendChild(titleElem);
  liElem.appendChild(deleteElem);

  /* 
     <li data-no="2">
       <span>2</span>
       <span>
         <s>샘플2</s>
       </span>
       <button type="button">삭제</button>
     </li>; */
  return liElem;
}

showList();
