const localkey = document.querySelector("#localKey");
const localValue = document.querySelector("#localValue");
const localResult = document.querySelector("#localResult");





//로컬 스토리지에 저장
function saveToLocal() {
  if (localkey.value && localValue.value) {
    localStorage.setItem(localkey.value, localValue.value);
    localResult.innerHTML = `저장됨 : ${localkey.value} = ${localValue.value}`;
    localkey.value = "";
    localValue.value = "";
  } else {
    localResult.innerHTML = `키와 값을 모두 입력하세요.`;
  }
}

//로컬 스토리지에서 읽어오기
function loadFromLocal(key) {
  if (localkey.value) {
    const value = localStorage.getItem(localkey.value);
    if (value) {
      localResult.innerHTML = `불러옴 : 키 ${localkey.value} = ${value}`;
    } else {
      localResult.innerHTML = `키 ${localkey.value}를 찾을 수 없습니다.`;
    }
  } else {
    localResult.innerHTML = `키를 입력하세요.`;
  }
}

//로컬 스토리지에서 삭제하기
function delFromLocal() {
  if (localStorage.getItem(localkey.value)) {
    localStorage.removeItem(localkey.value);
    localResult.innerHTML = `키 삭제되었다`;
  } else {
    localResult.innerHTML = `키가 없다.`;
  }
}

function clearLocal() {
  localStorage.clear();
}
// ------------------------------------------------------------------------------
const sessionKey = document.querySelector("#sessionKey");
const sessionValue = document.querySelector("#sessionValue");
const sessionResult = document.querySelector("#sessionResult");


//로컬 스토리지에 저장
function saveToSession() {
  if (sessionKey.value && sessionValue.value) {
    sessionStorage.setItem(sessionKey.value, sessionKey.value);
    sessionResult.innerHTML = `저장됨 : ${sessionKey.value} = ${sessionValue.value}`;
    sessionKey.value = "";
    sessionValue.value = "";
  } else {
    sessionResult.innerHTML = `키와 값을 모두 입력하세요.`;
  }
}

//로컬 스토리지에서 읽어오기
function loadFromSession(key) {
  if (sessionKey.value) {
    const value = sessionStorage.getItem(sessionKey.value);
    if (value) {
      sessionResult.innerHTML = `불러옴 : 키 ${sessionKey.value} = ${value}`;
    } else {
      sessionResult.innerHTML = `키 ${sessionKey.value}를 찾을 수 없습니다.`;
    }
  } else {
    sessionResult.innerHTML = `키를 입력하세요.`;
  }
}

//로컬 스토리지에서 삭제하기
function delFromSession() {
  if (sessionStorage.getItem(sessionKey.value)) {
    sessionStorage.removeItem(sessionKey.value);
    sessionResult.innerHTML = `키 삭제되었다`;
  } else {
    sessionResult.innerHTML = `키가 없다.`;
  }
}

function clearLocal() {
  localStorage.clear();
}

function clearSession() {
  sessionStorage.clear();
}


function showAllData() {
  const allDataE = document.querySelector('#allData');
  let html = `<h3>localStorage</h3>`
  for(let i=0; i<localStorage.length; i++) {
    const key = localStorage.key(i);
    const value = localStorage.getItem(key);
    html += `${key} : ${value}<br>`
  }

html += `<h3>sessionStorage</h3>`
  for(let i=0; i<sessionStorage.length; i++) {
    const key = sessionStorage.key(i);
    const value = sessionStorage.getItem(key);
    html += `${key} : ${value}<br>`
  }

  allDataE.innerHTML = html;
}