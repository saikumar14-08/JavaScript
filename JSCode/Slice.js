Array.prototype.mySlice = function (start, end) {
  let op = [];

  if (start >= end || (start <= 0 && end <= 0)) return op;
  for (let i = 0; i < this.length; i++) {
    if (i >= start && i < end) op.push(this[i]);
    if (arguments.length === 1 && arguments[0] > 0 && i >= arguments[0]) {
      op.push(this[i]);
    }
    if (arguments.length === 1 && arguments[0] < 0 && i + arguments[0] > 0) {
      op.push(this[i]);
    }
  }
  return op;
};
const array = [1, 2, 3, 4, 5];
const newArray = array.mySlice(1, 4);
const anotherArray = array.mySlice(-2);
console.log(newArray);
console.log(anotherArray);
