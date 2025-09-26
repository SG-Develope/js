/*
new Object() - 생성자 함수로 객체 생성
*/



const user = new Object(); //Object 생성자 함수로 객체 생성

user.name = '테스트'; //user 객체에 name 속성을 추가
user.age = 20; // user 객체에 age 속성을 추가
user.hobby = '객체연구'; // user 객체에 hobby 속성을 추가

console.log(user);
console.log(user['name']);

