const todoList = [
  {
    id: 1,
    title: "JavaScript 공부",
    done: true,
  },
  {
    id: 4,
    title: "React 공부",
    done: true,
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

let no = todoList.length;


function showList() {

  const todoListElem = todoList.map((item) => {
    return getTodoItemElem(item);
  });
  console.log("todo", todoListElem);
  const todoListUl = document.querySelector(".todolist");
  console.log("testtest", todoListUl);

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
  liElem.setAttribute("data-no", item.id);
  liElem.setAttribute("data-done", item.done);


  // 취소선 초기 세팅
   if(item.done) {
    const sElem = document.createElement('s');
    sElem.appendChild(titleElem.firstChild);
    titleElem.appendChild(sElem);
  }


  // 삭제 이벤트 추가
liElem.addEventListener('click', function(event) {
  //this 이벤트가 발생한 요소
  const parentLi =event.target.closest('li');
  console.log(parentLi);
  const no = parentLi.getAttribute('data-no');
  toggleDone(no);
})


deleteElem.addEventListener('click', function() {
  //this 이벤트가 발생한 요소
  const parentLi = this.parentNode;
  const no = parentLi.getAttribute('data-no');
  removeItem(no);
})
  


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

/**
 * 추가 버튼 클릭 시 실행되는 이벤트 핸들러
 * 입력창의 값을 가져와 새로운 Todo아이템을 추가
 */
function add() {
  const inputElem = document.querySelector(".todoinput > input");
  console.log(inputElem.value); //HTML 표준 속성은 DOM 객체의 동일한 속성으로 접근 가능
  if (inputElem.value.trim() !== "") {
    addItem(inputElem.value.trim());
    inputElem.value = "";
    inputElem.focus();
  }
}



/**
 * 새로운 Todo 아이템을 목록에 추가하는 함수
 * @param {string} title
 */
function addItem(title) {
  const todoListUl = document.querySelector(".todolist");
  const item = {
    id: ++no,
    title,
    done: false,
  };

  const todoLi = getTodoItemElem(item);
  todoListUl.insertBefore(todoLi, todoListUl.firstElementChild);
}

/**
 * 입력창에서 키보드 입력 시 실행되는 이벤트 핸들러
 * Enter 키 입력 시 추가 기능을 실행
 * @param {keyboardEvent} event - 키보드 이벤트 객체
 */
function handleKeyup(event) {
  if (event.key === "Enter") add();
}


/**
 * Todo 아이템 하나를 삭제하는 함수
 * @param {number} no - 삭제할 Todo 아이템의 번호(id);
 */
function removeItem(no) {
  const targetLi = document.querySelector(`.todolist > li[data-no="${no}"]`);
  targetLi?.remove();
}

/**
 * Todo 아이템의 완료/미완료 상태를 토글하는 함수
 * @param {number} no - 토글할 Todo 아이템의 번호(id);
*/
function toggleDone(no) {
  console.log(no);
  const targetLi = document.querySelector(`.todolist > li[data-no="${no}"]`);
  const isDone = (targetLi.getAttribute('data-done') === 'true');
  const titleEl = targetLi.querySelector('span:last-of-type');

  if(!isDone) {
    const sElem = document.createElement('s');
    sElem.appendChild(titleEl.firstChild);
    titleEl.appendChild(sElem);
  } else {
    const sElem = titleEl.querySelector('s');
    if (sElem) {
      titleEl.appendChild(sElem.firstChild); // 텍스트 노드 꺼내기
      sElem.remove(); // <s> 태그 제거
    }
  }
  
  targetLi.setAttribute('data-done',!(isDone));
}



// '추가' 버튼 클릭 시
document.querySelector(".todoinput > button").addEventListener("click", add);

// input 요소에 키보드 입력
document.querySelector('.todoinput > input').addEventListener('keyup', handleKeyup)
showList();
