/*
매개변수를 가진 함수 - 도어락
*/

/**
 * 올바른 비밀번호가 입력되면 문이 열리고(띠리링을 출력)
 * 잘못된 비밀번호가 입력되면 경보음이 울림(삐! 삐! 삐! 삐! 출력)
 * 예시)
 * - doorLock('11111') -> 삐! 삐! 삐! 삐!
 * - doorLock('1357') -> 띠리링
 * - doorLock() -> 삐! 삐! 삐! 삐!
 * @param {*} password - 비밀번호
 */
function doorLock(password) {
  // 세팅된 비밀번호
  const pwd = '135745';
  const result =
    typeof password === 'string' && pwd === password.slice(-pwd.length)
      ? "띠리링"
      : "삐! 삐! 삐! 삐!";
  console.log(result);
}

// 테스트 케이스
doorLock("11111"); // 삐! 삐! 삐! 삐!
doorLock("1357"); // 띠리링
doorLock(); // 삐! 삐! 삐! 삐!

doorLock("13574324135745"); // 띠리링
doorLock("135743241357"); // 띠리링

