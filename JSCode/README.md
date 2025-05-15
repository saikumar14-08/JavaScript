# Throttling
## 📌 Throttling Function
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
# Deepcopying of an object.
# Currying
# Memoization
# Debouncing

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