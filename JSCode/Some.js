Array.prototype.mySome = function(fn) {
  for(let i=0;i<this.length;i++) {
    if(fn(this[i],i,this)) return true
  }
  return false
}
const numbers = [1,2,3,4,5,6,7,8,9,10];
const hasNegativeNumber = numbers.mySome(number => number > 0);
console.log(hasNegativeNumber); 