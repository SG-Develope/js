// 인터페이스로 객체의 타입 선언
// ex06-07.ts 복사

(() => {
  //타입 별칭 생성
  // type User = {
  interface User{
    name: string;
    age: number;
  };

  const haru: User = { name: "haru", age: 3 };
  const namu: User = { name: "namu", age: 2 };
  console.log(haru.age, namu.name.toUpperCase());
})();