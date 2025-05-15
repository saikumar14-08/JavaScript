## Debouncing
Description of Debouncing.
### Code
```js
const Debounce = (fn, delay) => {
  let timer;
  return (...args) => {
    if(timer) clearTimeout(timer);
    timer = setTimeout(() => fn(...args), delay)
  }
}

let btnId = document.getElementById("click-btn");
const debouncedEvt = Debounce(() => {
  console.log("Button Clicked")
}, 1000);

btnId.addEventListener("click", debouncedEvt)
```
## 📌 Throttling.
Description of Throttling
### 🧠 Code
```js
const Throttling = (fn, delay) => {
  let lastCall = 0;
  return function (...args) {
    const now = performance.now();
    if (now - lastCall >= delay) {
      fn.apply(this, args);
      lastCall = now;
    }
  };
};
let btnId = document.getElementById("click-btn");
let throttleCheck = Throttling(() => console.log("Button Clicked"), 2500);
btnId.addEventListener("click", throttleCheck);
```
## Deepcopying.
Description of Deep copying.
### Code
```js
const DeepCopy = (obj) => {
  if(typeof obj !== 'object' || obj === null) return obj;
  const deepCpy = Array.isArray(obj) ? [] : {};
  for(let key in obj) {
    let val = obj[key];
    deepCpy[key] = DeepCopy(val);
  }
  return deepCpy
}

const OrigObj = {
  one: 1,
  two: 2,
  three: {
    four: 4,
    five: 5
  }
}

const DeepCopyObj = DeepCopy(OrigObj);
OrigObj.three["four"] = 44;
console.log(OrigObj, DeepCopyObj)
```
## Memoization
Description of memoization.
### Code
```js
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
```
## Currying
Description of currying.
### Code
```js

```

## Polyfills
# map
# filter
# reduce
# forEach
# Array.prototype.flat
# flatMap
# some
# every
# find
# findIndex
# slice
# splice
# Object.freeze
# Object.seal
# Promise
# Promise.all
# Promise.race
# Promise.allSettled
# Array.isArray()
# call
# apply
# bind
# compose
# pipe
# String.prototype.repeat
# 