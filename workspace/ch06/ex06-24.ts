// 타입 가드 - 함수가 null을 리턴할 수 있을 경우

(()=>{
  
  const a = document.querySelector('a[href="ch06/ex06-24.js"]') as Element;

  // FIXME 타입 단언을 사용해서 타입 에러를 없애세요.
  a.textContent += ' 클릭';

})();


(()=>{
  // Non-null assertion operator(!) 사용해서 타입 에러를 없애기
  const a = document.querySelector('a[href="ch06/ex06-24.js"]');
  // FIXME 타입 단언을 사용해서 타입 에러를 없애세요.
    a!.textContent += ' 클릭';

})();

(()=>{
  //타입 가드를 상요해서 타입 에러를 없애기
  const a = document.querySelector('a[href="ch06/ex06-24.js"]');
  // FIXME 타입 단언을 사용해서 타입 에러를 없애세요.
  if(a !== null){
    a.textContent += ' 클릭';
  }

})();