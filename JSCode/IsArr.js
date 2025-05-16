const isArrChk = function(args) {
  return Object.prototype.toString.call(args) === '[object Array]'
}
let ip = "[1,2,3,4,5,6,7,8,9]"
console.log(isArrChk(ip));