import type { Cat } from "./types.js";
import { appendImages } from "./utils.js";
import axios from 'axios';

// 랜덤 고양이 이미지 가져오기 - axios 라이브러리
// ex09-02.ts 복사



const url = "https://api.thecatapi.com/v1/images/search";

const btn = document.querySelector("button");
btn?.addEventListener("click", getImages);

async function getImages(): Promise<void> {
  
  try {
    const {data} = await axios.get(url); // 정확한 타입
    appendImages(data);
 
}catch (error) {
    console.error(error);
  }

}

