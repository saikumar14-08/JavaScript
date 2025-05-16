Array.prototype.myFilter = function(fn) {
  let op = [];
  for(let i=0;i<this.length;i++) {
    if(fn(this[i],i)) op.push(this[i])
  }
return op;
}
let inp = [1,2,3,4,5,6]
let opAr = inp.myFilter((el,i) => {
  console.log(i);  
  return el%2===0
});
console.log(opAr);