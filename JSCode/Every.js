Array.prototype.myEvery = function (fn) {
  for (let i = 0; i < this.length; i++) {
    if (!fn(this[i], i, this)) return false;
  }
  return true;
};
const numbers = [1, 2, 3, 4, 5];
const allPositive = numbers.myEvery((number) => number > 0);
console.log(allPositive);