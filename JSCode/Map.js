Array.prototype.myMap = function(fn) {
  let op = [];
  let ipAr = this;
  for(let i=0;i<ipAr.length;i++) {
    op.push(fn(ipAr[i],i));
  }
  return op;
}

let inp = [1,2,3,4,5,6]
let opAr = inp.myMap((el,i) => el*i);
console.log(opAr);