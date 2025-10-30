// 맵드 타입 - 기본 문법

(()=>{
  type User = {
    id: string;
    name: string;
    addr: string;
    phone: string;
  }

  type UserFields = 'id' | 'name' | 'addr' | 'phone'
  type test = {
    [Prop in UserFields]: string;
  }

  const haru: User = {
    id:'1',
    name:'하루',
    addr:'김포시',
    phone:'010112345678'
  };

  console.log(haru);
})();
