Array.prototype.myForEach = function (fn) {
  for (let i = 0; i < this.length; i++) {
    this[i] = fn(this[i], i, this);
  }
  return this;
};
let ip = [1, 2, 3, 4, 5, 6];
console.log(ip)
ip.myForEach((el) => {
  return el * 2;
});
console.log(ip)