// 타입 가드 함수 작성
// ex06-26.ts 복사
(() => {
    const user1 = {
        name: "하루",
        age: 5,
        admin: false,
    };
    const user2 = {
        name: "나무",
        admin: true,
        level: 2,
    };
    const user3 = {
        name: "가을",
    };
    helloUser(user1);
    helloUser(user2);
    // User 타입이나 AdminUser 타입을 받아서 각각의 타입에 맞는 코드를 실행하는 함수
    function helloUser(user) {
        if (isAdmin(user)) {
            console.log(`안녕하세요. 레벨 ${user.level} ${user.name} 관리자님.`);
        }
        else if (isGuest(user)) { // Guest
            console.log(`안녕하세요. ${user.name} 님.`);
        }
        else { // User
            console.log(`안녕하세요. ${user.age}살 ${user.name} 회원님.`);
        }
    }
    function isAdmin(user) {
        return 'admin' in user && user.admin === true;
    }
    function isGuest(user) {
        return !("age" in user) && !("level" in user) && user.name === '게스트';
    }
})();
export {};
