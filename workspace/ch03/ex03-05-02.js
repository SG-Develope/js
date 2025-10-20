// ex03-03-02.js 복사

/*
* 클래스 정의와 상속

*/

class HighSchool {
  constructor(kor, eng) {
    this.kor = kor;
    this.eng = eng;
  }
  #sum() {
    return this.kor + this.eng;
  }
  avg() {
    return Math.round(this.#sum() / 2);
  }
}

const h1 = new HighSchool(100, 91);
console.log('h1', h1.kor, h1.eng); // 100, 91
console.log('h1 총점', h1.sum()); // 191
console.log('h1 총점', h1.sum()/2); // 191
console.log('h1 평균', h1.avg()); // 95.5