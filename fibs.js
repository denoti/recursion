function fibs(num) {
  let arr = [];
  let num1 = 0;
  let num2 = 1;
  let num3 = num1 + num2;
  for (let i = 0; i < num - 1; i++) {
    if (arr.length < 1) {
      arr.push(num1);
      arr.push(num2);
    } else {
      arr.push(num3);
      num1 = num2;
      num2 = num3;
      num3 = num1 + num2;
    }
  }
  return arr;
}

console.log(fibs(5))
