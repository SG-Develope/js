function goBack() {
  history.back();
}

function goForward() {
  history.forward();
}

function pushHistory() {
  const state = {
    timestamp : Date.now(),
    hello : 'world'
  };
  const title = '';
  const url = document.querySelector('input').value;

  history.pushState(state, title, url);
  updateResult();
}

function replaceHistory() {

}


function updateResult() {
  const info = `
    현재 히스토리 크기 : ${history.length}<br>
    현재 URL : ${location.href}<br>
    현재 state 값 :${history.state}
  `
  document.querySelector('#result').innerHTML = info;
}