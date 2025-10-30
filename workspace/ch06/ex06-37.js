// 맵드 타입 - 유틸리티 타입 구현 원리
(() => {
    const todo1 = {
        id: '1',
        title: '제목1',
        // content: '내용1'
    };
    const todo2 = {
        id: '1',
        title: '제목1',
        // content: '내용1'
    };
    const todo3 = {
        title: '제목3',
        // content: '내용1'
    };
    todo3.title = '수정';
})();
export {};
