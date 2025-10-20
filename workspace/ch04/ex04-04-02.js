/*
 * Partial application - 로그 함수
 */
function log(tartget, level, message) {
  const now = new Date();
  console.log(
    `[${now.getHours()}:${now.getMinutes()}] [${tartget}] [${level}] ${message}`
  );
}


log('console', 'WARN', 'warn message 1');
log('console', 'WARN', 'warn message 2');
log('file', 'ERROR', 'warn message 1');
log("file", "ERROR", "warn message 2");


//lodash 라이브러리 사용
// const consoleWarn = _.partial(log, 'console', 'WARN');
// consoleWarn('lodash warn message 1');
// consoleWarn("lodash warn message 2");

//mylib.js
const fileError = log.partial('file', 'ERROR');
fileError('mylib error')