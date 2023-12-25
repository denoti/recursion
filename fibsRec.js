function fibsRec(num, num1 = 0, num2 = 1, arr = []) {
  if (arr.length === num) {
    return arr;
  }
  arr.push(num1);
  return fibsRec(num, num2, num1 + num2, arr);
}

console.log(fibsRec(4));
