// 내장 객체 Array - reduce()

(() => {
  const arr = [1, 2, 3, 4];
  const initialValue = 0;
  const sum = arr.reduce(function (accumulator, currentValue, index) {
    console.log(
      `${index} -> ${accumulator} + ${currentValue} = ${
        accumulator + currentValue
      }`
    );
    return accumulator + currentValue;
  }, initialValue);

  console.log(sum); // 0 + 1 + 2 + 3 + 4 = 10
})();
