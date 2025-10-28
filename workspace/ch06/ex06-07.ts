// 타입 별칭으로 객체의 타입 선언

(() => {
  //타입 별칭 생성
  type User = {
    name: string;
    age: number;
  };

  const haru: User = { name: "test", age: 1 };
})();
