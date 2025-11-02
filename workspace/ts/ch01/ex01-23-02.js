/*
국어, 영어, 수학 점수의 총점과 평균을 출력
*/
//1. 원시형으로 선언
const userName = '원시핑';
let kor = 100;
let eng = 90;
let math = 85;
let sum = kor + eng + math;
let avg = sum / 3;

console.log(userName, '의 총점: ', sum);
console.log(userName, "의 평점: ", avg);

//2. 객체로 선언





const object = new Object();
object.kor = 58;
object.eng = 89;
object.math = 72;
object.sum = object.kor + object.eng + object.math;
object.avg = object.sum / 3;

console.log(userName, "의 총점: ", object['sum']);
console.log(userName, "의 평점: ", object["avg"]);

console.log(object);


const test = {
  "koffr" : "test",

}

console.log(test.koffr);

