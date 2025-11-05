import type { Cat } from "./types.js";
import { appendImages } from "./utils.js";

// 랜덤 고양이 이미지 가져오기 - XMLHttpRequest 사용

const url = "https://api.thecatapi.com/v1/images/search";

const btn = document.querySelector("button");
btn?.addEventListener("click", getImages);

function getImages(): void {
  // Ajax 프로그래밍 순서
  // 1. XMLHttpRequest 객체 생성
  const xhr = new XMLHttpRequest();

  // 2. 요청 준비(open)
  xhr.open("get", url, false);

  // 4. 응답 데이터 처리
  xhr.addEventListener("load", () => {
    console.log(xhr);
    const result = xhr.responseText; // 응답바디추출
    // console.log(result);
    const data: Cat[] = JSON.parse(result);
    console.log(data);
    appendImages(data);
  });

  // 3. 서버에 요청(send)
  xhr.send();
}
