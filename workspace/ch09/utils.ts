import type { Cat } from "./types";

// 이미지 목록을 받아서 화면에 추가
export function appendImages(images: Cat[]){
  const liList = images.map((item)=>{
    const li = document.createElement('li');
    const img = document.createElement('img');
    img.src = item.url;// <img src="http~~">
    img.height = 200;
    img.alt = '고양이';
    li.appendChild(img);
    return li;
  });

  const catList = document.querySelector('#cat-list');
  catList?.append(...liList);
}