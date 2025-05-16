String.prototype.myRepeat = function (times) {
  let op = "";
  if (times < 0)
    throw new RangeError("Range Error: Frequesny can't be negative.");
  if (typeof times !== "number" || !times) return "";
  while (times > 0) {
    op += this;
    times--;
  }
  return op;
};

let s = "Sai";
console.log(s.myRepeat(0));
