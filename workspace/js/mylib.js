
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


// isPrime(5) 메모이제이션 안됨
// isPrime = isPrime.memoize();
// isPrime(5) 메모이제이션이 됨
Function.prototype.memoize = function(){
  // this = isPrime
  const fn = this;
  return function(){
    return fn.memo.apply(fn, arguments); // isPrime.memo(5)
  };
};

// 모든 함수에 메모이제이션 기능 추가
Function.prototype.memo = function(key){
  // 캐시를 위한 코드
  this._cache = this._cache || {};
  if(this._cache[key] !== undefined){
    return this._cache[key];
  }else{
    return this._cache[key] = this(key);
  }
};