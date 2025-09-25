/*
if-else if문 사용

1. 정보처리 기사 필기 시험의 과목은 소프트웨어 설계, 소프트웨어 개발, 데이터베이스 구축, 프로그래밍 언어 활용, 정보 시스템 구축 관리 입니다.
다섯 과목의 점수가 다음과 같을 때 총점과 평균을 출력하는 프로그램을 작성하세요.
const softwareDesign = 48; // 1. 소프트웨어 설계
const softwareDevelopment = 80; // 2. 소프트웨어 개발
const databaseSetup = 50; // 3. 데이터베이스 구축
const programmingUsage = 70; // 4. 프로그래밍 언어 활용
const systemManagement = 55; // 5. 정보 시스템 구축 관리

출력 결과:
총점: 303
평균: 60.6

2. 최고점과 최저점을 추가로 출력하세요
출력 결과:
총점: 303
평균: 60.6
최고점: 80
최저점: 48

3. 과목당 40점 이상, 전과목 평균 60점 이상이면 합격입니다.
합격 여부를 추가로 출력하세요.
출력 결과:
총점: 303
평균: 60.6
최고점: 80
최저점: 48
축하합니다. 합격입니다.

4. 만약 불합격일 경우 불합격 사유를 추가로 출력하세요.
출력 결과 1: softwareDesign = 40일 경우
총점: 295
평균: 59
최고점: 80
최저점: 40
아쉽지만 불합격입니다. 사유: 평균 60점 미달(59점)

출력 결과 2: softwareDesign = 30일 경우;
총점: 285
평균: 57
최고점: 80
최저점: 30
아쉽지만 불합격입니다. 사유: 평균 60점 미달(57점)
아쉽지만 불합격입니다. 사유: 과락 40점 미달(30점)
*/

// 각 과목의 점수 정의
const softwareDesign = 70; // 1. 소프트웨어 설계
const softwareDevelopment = 60; // 2. 소프트웨어 개발
const databaseSetup = 80; // 3. 데이터베이스 구축
const programmingUsage = 70; // 4. 프로그래밍 언어 활용
const systemManagement = 20; // 5. 정보 시스템 구축 관리

//총점, 평균 계산
const sum =
  softwareDesign +
  softwareDevelopment +
  databaseSetup +
  programmingUsage +
  systemManagement;
const avg = sum / 5;

console.log("총점 : " + sum);
console.log("평균 : " + avg);

//2 최고 최저점

let maxScore = softwareDesign;
let minScore = softwareDesign;

//순차 탐색 알고리즘
if (softwareDevelopment > maxScore) maxScore = softwareDevelopment;
if (databaseSetup > maxScore) maxScore = databaseSetup;
if (programmingUsage > maxScore) maxScore = programmingUsage;
if (systemManagement > maxScore) maxScore = systemManagement;

console.log("최고점 : " + maxScore);

if (softwareDevelopment < minScore) minScore = softwareDevelopment;
if (databaseSetup < minScore) minScore = databaseSetup;
if (programmingUsage < minScore) minScore = programmingUsage;
if (systemManagement < minScore) minScore = systemManagement;

console.log("최저점 : " + minScore);

// 자바스크립트의 함수를 사용
// Math.min 사용법도있음

const isAvgFailed = "아쉽지만 불합격입니다. 사유: 평균 60점 미달(57점)";
const passingScore = 40;

if (softwareDesign < passingScore) {
  console.log(
    `아쉽지만 불합격입니다. 사유: 과락 40점 미달(${softwareDesign}점)`
  );
} else if (softwareDevelopment < passingScore) {
  console.log(
    `아쉽지만 불합격입니다. 사유: 과락 40점 미달(${softwareDevelopment}점)`
  );
} else if (databaseSetup < passingScore) {
  console.log(
    `아쉽지만 불합격입니다. 사유: 과락 40점 미달(${databaseSetup}점)`
  );
} else if (programmingUsage < passingScore) {
  console.log(
    `아쉽지만 불합격입니다. 사유: 과락 40점 미달(${programmingUsage}점)`
  );
} else if (systemManagement < passingScore) {
  console.log(
    `아쉽지만 불합격입니다. 사유: 과락 40점 미달(${systemManagement}점)`
  );
}

 if (avg < 60) {
   console.log(`아쉽지만 불합격입니다. 사유: 평균 60점 미달(${avg}점)`);
 } else if (avg >= 60 && min >= 40) {
   console.log("축하합니다. 합격입니다");
 }
