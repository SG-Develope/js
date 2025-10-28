// Enum 타입

(()=>{
  function printLanguage(lang: string){
    switch(lang){
      case 'JavaScript':
        console.log('자바스크립트 개발자군요!');
        break;
      case 'Python':
        console.log('파이썬 개발자군요!');
        break;
      case 'C':
        console.log('C언어 개발자군요!');
        break;
      case 'Java':
        console.log('자바 개발자군요!');
        break;
    }
  }
  printLanguage('Java');
  printLanguage('C');
  printLanguage('C++');
  printLanguage('Python');
  printLanguage('Javascript');
})();

(() => {
  enum Language {
    JavaScript = 'JS', // 0
    C = 'C',          // 1
    Python = 'PY',     // 2
    Java = 'J'        // 3
  }

  console.log(Language.Python, Language.C);

  function printLanguage(lang: Language){
    switch(lang){
      case Language.JavaScript:
        console.log('자바스크립트 개발자군요!');
        break;
      case Language.Python:
        console.log('파이썬 개발자군요!');
        break;
      case Language.C:
        console.log('C언어 개발자군요!');
        break;
      case Language.Java:
        console.log('자바 개발자군요!');
        break;
    }
  }
  // printLanguage(Language.JavaScript);
  // printLanguage(Language.C);
  // printLanguage(Language.Java);
  // printLanguage(Language.Python);

  // printLanguage(Language.JavaScript);
  // printLanguage(Language.C);
  // printLanguage(Language.Java);
  // printLanguage(Language.Python);

})();

