Array.prototype.myFindIndex = function (fn) {
  for (let i = 0; i < this.length; i++) {
    if (fn(this[i])) return i;
  }
  return -1;
};

const array1 = [5, 12, 8, 130, 44];
const isLargeNumber = (element) => element > 13;
console.log(array1.myFindIndex(isLargeNumber));
