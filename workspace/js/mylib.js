
export const mylib = {};





//child 가 parent를 상속받는다.
 mylib.inherite = (parent, child) => {
  // const F = function () {};
  // F.prototype = parent.prototype;
   // child.prototype = new F();
   
   //object.create: 지정한 prototype 객체를 참조하는 객체 생성
   child.prototype = Object.create(parent.prototype);
};


export const test = () => {
  console.log("안녕하세요");
};
