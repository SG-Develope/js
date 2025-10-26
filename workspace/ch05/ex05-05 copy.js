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

const ulElem = document.querySelector(".todolist");
const todoInput = document.querySelector(".todoinput input");
const addBtn = document.querySelector(".todoinput button");

// 목록표출
todoList.forEach((item) => {
  ulElem.appendChild(createTodoElement(item.id, item.title, item.done));
});

// Todo list 추가,삭제,enter 버튼 이벤트 등록
addBtn.addEventListener("click", createTodoListItem);
ulElem.addEventListener("click", deleteTodoListItem);
todoInput.addEventListener("keyup", (e) => {
  if (e.key === "Enter") createTodoListItem();
});



/**
 * 요소생성함수
 * @param {Number} id 
 * @param {string} title 
 * @param {boolean} done 
 * @returns 
 */
function createTodoElement(id, title, done = false) {
  const li = document.createElement("li");
  li.dataset.no = id;
  li.dataset.done = done;

  const spanId = document.createElement("span");
  spanId.textContent = id;

  const spanTitle = document.createElement("span");
  spanTitle.textContent = title;

  const btn = document.createElement("button");
  btn.textContent = "삭제";
  btn.className = "delBtn";

  li.append(spanId, spanTitle, btn);
  return li;
}

//요소삭제함수
function deleteTodoListItem(e) {
  if (e.target.classList.contains("delBtn")) {
    const li = e.target.closest("li");
    const id = Number(li.dataset.no);

    li.remove();

    // todoList 항목 제거
    const index = todoList.findIndex((item) => item.id === id);
    todoList.splice(index, 1);
  }
}

//요소추가함수
function createTodoListItem() {
  const title = todoInput.value.trim();
  if (!title) return alert("할 일을 입력하세요!");

  //시퀀스 넘버 추출
  const nextId = todoList.length
    ? Math.max(...todoList.map((num) => num.id)) + 1 : 1;

  ulElem.appendChild(createTodoElement(nextId, title));
  const newTodoElement = { id: nextId, title: title, done: false };

  //추가된 Todo요소 list에 적용
  todoList.push(newTodoElement);

  todoInput.value = "";
}
