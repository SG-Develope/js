const urlInfo = document.querySelector('#urlInfo');
urlInfo.innerHTML = `
  전체 URL : ${location.href} <br>
  프로토콜 : ${location.protocol} <br>
  호스트 : ${location.hostname} <br>
  포트 : ${location.port} <br>
  경로 : ${location.pathname} <br>
  쿼리스트링 : ${location.search} <br>
`

function changeHost() {
  location.host = 'localhost:8080';
  location.pathname = '/ch05/ex05-12.html';
}


function addParams() {
  
  const currentUrl = new URL(location.href);
  console.log(currentUrl);
  currentUrl.searchParams.set('keyword', 'dogs');
  currentUrl.searchParams.set('page', '2');
  console.log(currentUrl.toString());
  location.href = currentUrl.toString();
}