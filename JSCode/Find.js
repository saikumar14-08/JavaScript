Array.prototype.myFind = function (fn) {
  for (let i = 0; i < this.length; i++) {
    if (fn(this[i])) return this[i];
  }
  return undefined;
};
const numbers = [10, 20, 30, 40, 50];
const foundNumber = numbers.myFind((number) => number > 52);
console.log(foundNumber);
