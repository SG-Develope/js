let todoList = [
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

const tableList = document.querySelector(".todolist tbody");
const todoInput = document.querySelector(".todoinput input");
const addBtn = document.querySelector(".todoinput button");
const delBtn = document.querySelector(".delbtn");
const checkAllbtn = document.querySelector("thead input");



//localStorage에서 할일 목록 조회
//없을 경우 기본값(todoList)사용
function getTodoList() {
  let localTodoList = localStorage.getItem('todoList');
  if(localTodoList === null) {
    localTodoList = todoList;
    localStorage.setItem('todoList', JSON.stringify(localTodoList));
  } else {
    localTodoList = JSON.parse(localTodoList);
  }
  return localTodoList;
}

//로컬스토리지 TodoList 갱신
function saveTodoList() {
  localStorage.setItem('todoList', JSON.stringify(todoList));
}

//스토리지 추가항목
todoList = getTodoList();



// 목록표출
todoList.forEach((item) => {

  tableList.appendChild(createTodoRow(item));
});

// Todo list 추가,삭제,enter 버튼 이벤트 등록
addBtn.addEventListener("click", createTodoListItem);
delBtn.addEventListener("click", deleteTodoListItem);
todoInput.addEventListener("keyup", (e) => {
  if (e.key === "Enter") createTodoListItem();
});

checkAllbtn.addEventListener("change", checkboxAll);

/**
 * 요소생성함수
 * @param {Number} id
 * @param {string} title
 * @param {boolean} done
 * @returns
 */

//목록표출함수
function createTodoRow({ id, title, done = false }) {
  const tr = document.createElement("tr");
  tr.dataset.no = id;
  tr.dataset.done = done;

  //선택상자
  const tdCheck = document.createElement("td");
  const checkbox = document.createElement("input");
  checkbox.type = "checkbox";
  checkbox.checked = done;
  checkbox.dataset.id = id;
  tdCheck.appendChild(checkbox);

  checkbox.addEventListener("change", updateCheckAll);

  //시퀀스넘버
  const tdId = document.createElement("td");
  tdId.textContent = id;

  //Todo목록
  const tdTitle = document.createElement("td");
  tdTitle.textContent = title;
  tdTitle.classList.toggle("done", done);

  tdTitle.addEventListener("click", (e) => {
    tdTitle.classList.toggle("done");

  
    //진행상황 텍스트 수정
    const isDone = tdTitle.classList.contains("done");
    tdStatus.textContent = isDone ? "완료" : "미완료";

    // TodoList 값(done) 변경
    const tr = e.target.closest("tr"); // 가장 가까운 행
    const id = Number(tr.dataset.no); // 데이터 번호 찾기

    const target = todoList.find((item) => item.id === id);
  if (target) {
    target.done = isDone; 
    //로컬스토리지 수정
    saveTodoList();
  }
  tr.dataset.done = isDone;

  });


  
  //진행상황
  const tdStatus = document.createElement("td");
  tdStatus.textContent = done ? "완료" : "미완료";

  tr.append(tdCheck, tdId, tdTitle, tdStatus);

  return tr;
}

/**
 * //요소선택삭제
 * @param {Array} delList
 */
function deleteTodoListItem() {
  const checkedElems = document.querySelectorAll(
    "tbody input[type='checkbox']:checked"
  );

  if (checkedElems.length === 0) return alert("삭제항목을 선택하세요");

  checkedElems.forEach((checkbox) => {
    const id = Number(checkbox.dataset.id);

    //todoList 목록 삭제
    const index = todoList.findIndex((item) => item.id === id);
    if (index > -1) todoList.splice(index, 1);

    // 테이블 행 삭제
    checkbox.closest("tr").remove();
  });

  //삭제요소 로컬스토리지 반영
    saveTodoList();

  resetAllCheckboxes();
}

// row추가함수
function createTodoListItem() {
  const title = todoInput.value.trim();
  if (!title) return alert("목록을 입력하세요!");

  //시퀀스 넘버 추출
  const nextId = todoList.length
    ? Math.max(...todoList.map((num) => num.id)) + 1
    : 1;

  const newItem = { id: nextId, title: title, done: false };
  tableList.appendChild(createTodoRow(newItem));
  const newTodoElement = { id: nextId, title: title, done: false };

  //추가된 Todo요소 list에 적용
  todoList.push(newTodoElement);

  todoInput.value = "";

  // 전체선택 체크박스 초기화
  const checkedAllbtn = document.querySelector("input[type='checkbox']");
  if (checkedAllbtn) checkedAllbtn.checked = false;

  //로컬스토리지에 반영
    saveTodoList();

  resetAllCheckboxes();
}

// 전체선택
function checkboxAll(e) {
  const isChecked = e.target.checked;
  tableList
    .querySelectorAll("input[type='checkbox']")
    .forEach((cb) => (cb.checked = isChecked));
}

//추가 및 삭제버튼 클릭 시 체크박스 상태 reset
function resetAllCheckboxes() {
  tableList
    .querySelectorAll("input[type='checkbox']")
    .forEach((cb) => (cb.checked = false));
  if (checkAllbtn) checkAllbtn.checked = false;
}

//body checkbox 전체 요소 체크확인
function updateCheckAll() {
  const allCheckboxes = tableList.querySelectorAll("input[type='checkbox']");
  const allChecked = Array.from(allCheckboxes).every((cb) => cb.checked);
  checkAllbtn.checked = allChecked;
}
