/*
if-else문 학생의 점수에 따라 학점을 계산하고 출력하는 프로그램을 작성합니다.
*/


// 점수는 0 ~ 100 점 사이의 정수
const score = 74;

// 학점을 저장하는 변수
let grade = '';

const agradeRange = score >= 90 && score <= 100; // A: 90점 이상 100점 이하
const bgradeRange = score >= 80 && score < 90; // B: 80점 이상 90점 미만
const cgradeRange = score >= 70 && score < 80; // C: 70점 이상 80점 미만
const dgradeRange = score >= 60 && score < 70; // D: 60점 이상 70점 미만
const fgradeRange = score < 60;                 // F: 60점 미만

if (score != null && typeof score === 'number') {
    
    if (agradeRange) grade = 'A';
    if (bgradeRange) grade = 'B';
    if (cgradeRange) grade = 'C';
    if (dgradeRange) grade = 'D';
    if (fgradeRange) grade = 'F';

    console.log(`${score}점 : ${grade} 학점 입니다.`);
} else {
    console.log("score에 0 ~ 100 까지 숫자를 입력해주세요"); // 예외처리
}



