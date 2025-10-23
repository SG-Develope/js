const ua = document.querySelector("#user-agent");
const lang = document.querySelector("#language");
const platform = document.querySelector("#platform");
const isOnline = document.querySelector("#online-status");

ua.textContent = window.navigator.userAgent;
lang.textContent = navigator.language;
platform.textContent = navigator.platform;
// isOnline.textContent = navigator.onLine ? "온라인" : "오프라인";

let browserName = "Unknown";
if (navigator.userAgent.includes("Edg")) {
  browserName = "Edg";
} else if (navigator.userAgent.includes("Chrome")) {
  browserName = "Chrome";
} else if (navigator.userAgent.includes("Safari")) {
  browserName = "Safari";
}

ua.textContent += ' - '  + browserName;


window.addEventListener('online', () => {
  isOnline.textContent = '오프라인 (테스트용)';
});
window.addEventListener('offline', () => { isOnline.textContent = '오프라인'});