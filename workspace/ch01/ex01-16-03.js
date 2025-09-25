
// if문을 이용하여 사용자의 로그인 상태와 사용자의 등급을 출력하세요


const isLogin = true;
const isUser = true;
const isSeller = false;
const isAdmin = false;


//로그인 상태 출력
// 로그인 상태/로그아웃 상태

const status = isLogin ? "로그인 상태" : "로그아웃 상태";
console.log(isLogin);
// 사용자 유형 출력
// 구매자/판매자/관리자


if (isLogin == true) {
if (isUser)   console.log("구매자 입니다.");
if (isSeller) console.log("판매자 입니다.");
if (isAdmin)  console.log("관리자 입니다.");
}


// 로그인 상태와 사용자 유형을 조합해서 출력
// 사용자 로그인 상태/사용자 로그아웃 상태
// 판매자 로그인 상태/판매자 로그아웃 상태
// 관리자 로그인 상태/관리자 로그아웃 상태

const loginStatus = isLogin ? "로그인 상태" : "로그아웃 상태";

if (isUser)   console.log(`${loginStatus} /구매자 입니다.`);
if (isSeller) console.log(`${loginStatus} /판매자 입니다.`);
if (isAdmin)  console.log(`${loginStatus} /관리자 입니다.`);