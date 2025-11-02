/*
변수 선언
*/

//일반적인 변수명
var age = 29;
var userName = '좋아핑';
var user2Name = '좋아핑2';
// var 3userName = '싫어핑'; 에러 : 식별자는 숫자롤 시작할 수 없음
var $userName = '머니핑';

//특수문자만사용
var $$$ = 100000; //단 _%만 가능
var ___ = '몇개일까';

var userName = '낙타핑';
var userAge = 29;
var userGender = '남자';
var userEmail = 'hello@gmail.com';




console.log('이름', userName);
console.log('나이', userAge);
console.log('성별', userGender);
console.log('이메일', userEmail);

const user = {
  name: "Tom",
  age: 30,
  address: {
    city: "Seoul",
    zip: "12345",
  },
};

console.table(user); // 더 명확한 트리형 구조로 보여줌