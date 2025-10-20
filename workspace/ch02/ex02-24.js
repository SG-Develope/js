/*
* 즉시실행 함수
- 함수를 정의하는 동시에 즉시 실행하는 패턴

*/


var fn1 = function () {
  var alert = 'alert 변수명은 포기 못해!!!';
  console.log(alert);
};

fn1();

var fn2 = function (alert) {
  var alert = 'alert 변수명은 포기 못해!!!';
  console.log('fn2', alert);
};

fn2('alert 변수명은 포기 못해!!!');


// 즉시 실행 함수
(function () {
  var alert = 'alert 변수명은 포기 못해!!!';
  console.log('IIFE', alert);
})();