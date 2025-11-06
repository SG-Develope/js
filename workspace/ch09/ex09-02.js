import { appendImages } from "./utils.js";
// 랜덤 고양이 이미지 가져오기 - Fetch API 사용
// ex09-01.ts 복사
const url = "https://api.thecatapi.com/v1/images/search";
const btn = document.querySelector("button");
btn?.addEventListener("click", getImages);
async function getImages() {
    try {
        const response = await fetch(url); // 정확한 타입
        const data = await response.json();
        appendImages(data);
    }
    catch (error) {
        console.error('네트워크 오류:', error);
    }
}
