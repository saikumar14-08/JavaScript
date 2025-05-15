const Memo = (fn) => {
  let memoObj = {}
  return (...args) => {
    let key = JSON.stringify(...args);
    if(key in memoObj) {  
      console.log("From Cache: ", memoObj[key]);
         
      return memoObj[key];
    }
    else {
      let val = fn(...args);
      memoObj[key] = val;
      return val;
    }
  }
}

const fib = Memo((n) => {
  if (n <= 1) return n;
  return fib(n - 1) + fib(n - 2);
});

console.log(fib(10))