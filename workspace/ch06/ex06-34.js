// 유틸리티 타입 - Record
(() => {
    // type UserPermissions = {
    //   admin : string[];
    //   user : string [];
    //   guest : string[];
    //   // level1: string[];
    //   // level2: string[];
    //   // level3: string[];
    // };
    const permissions = {
        admin: ['read', 'write', 'delete'],
        user: ['read', 'write'],
        guest: ['read']
    };
    console.log('게스트 권한', permissions);
})();
export {};
