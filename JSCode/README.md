## Debouncing

Description of Debouncing.

### Code

```js
const Debounce = (fn, delay) => {
  let timer;
  return (...args) => {
    if (timer) clearTimeout(timer);
    timer = setTimeout(() => fn(...args), delay);
  };
};

let btnId = document.getElementById("click-btn");
const debouncedEvt = Debounce(() => {
  console.log("Button Clicked");
}, 1000);

btnId.addEventListener("click", debouncedEvt);
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
  if (typeof obj !== "object" || obj === null) return obj;
  const deepCpy = Array.isArray(obj) ? [] : {};
  for (let key in obj) {
    let val = obj[key];
    deepCpy[key] = DeepCopy(val);
  }
  return deepCpy;
};

const OrigObj = {
  one: 1,
  two: 2,
  three: {
    four: 4,
    five: 5,
  },
};

const DeepCopyObj = DeepCopy(OrigObj);
OrigObj.three["four"] = 44;
console.log(OrigObj, DeepCopyObj);
```

## Memoization

Description of memoization.

### Code

```js
const Memo = (fn) => {
  let memoObj = {};
  return (...args) => {
    let key = JSON.stringify(...args);
    if (key in memoObj) {
      console.log("From Cache: ", memoObj[key]);

      return memoObj[key];
    } else {
      let val = fn(...args);
      memoObj[key] = val;
      return val;
    }
  };
};

const fib = Memo((n) => {
  if (n <= 1) return n;
  return fib(n - 1) + fib(n - 2);
});

console.log(fib(10));
```

## Currying

Description of currying.

### Code

```js

```

# 🧠 JavaScript Polyfill Practice – Ordered by Difficulty

This list ranks common JavaScript polyfill topics from easiest to hardest, based on logic complexity and real-world interview expectations.

---

## 🟢 Beginner-Friendly (Straightforward Logic)

1. `Array.isArray()`

```js
const isArrChk = function (args) {
  return Object.prototype.toString.call(args) === "[object Array]";
};
let ip = "[1,2,3,4,5,6,7,8,9]";
console.log(isArrChk(ip));
```

2. `String.prototype.repeat`

```js
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
```

3. `Array.prototype.forEach`
Check if there is any misconception here.
```js
Array.prototype.myForEach = function (fn) {
  for (let i = 0; i < this.length; i++) {
    this[i] = fn(this[i], i, this);
  }
  return this;
};
let ip = [1, 2, 3, 4, 5, 6];
console.log(ip);
ip.myForEach((el) => {
  return el * 2;
});
console.log(ip);
```

4. `Array.prototype.map`
```js
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
```

5. `Array.prototype.filter`
```js
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
```
6. `Array.prototype.find`
```js
Array.prototype.myFind = function (fn) {
  for (let i = 0; i < this.length; i++) {
    if (fn(this[i])) return this[i];
  }
  return undefined;
};
const numbers = [10, 20, 30, 40, 50];
const foundNumber = numbers.myFind((number) => number > 52);
console.log(foundNumber);
```
7. `Array.prototype.findIndex`
```js
Array.prototype.myFindIndex = function (fn) {
  for (let i = 0; i < this.length; i++) {
    if (fn(this[i])) return i;
  }
  return -1;
};

const array1 = [5, 12, 8, 130, 44];
const isLargeNumber = (element) => element > 13;
console.log(array1.myFindIndex(isLargeNumber));
```
8. `Array.prototype.some`
9. `Array.prototype.every`
10. `Array.prototype.slice`

---

## 🟡 Intermediate (Requires Index/State Management)

11. `Array.prototype.reduce`
12. `Array.prototype.flat`
13. `Array.prototype.flatMap`
14. `Array.prototype.splice`
15. `Object.freeze`
16. `Object.seal`

---

## 🔴 Advanced (Context, Closures, Higher-Order Functions)

17. `Function.prototype.call`
18. `Function.prototype.apply`
19. `Function.prototype.bind`
20. `Function Composition (compose)`
21. `Function Composition (pipe)`

---

## 🔥 Expert Level (Async, Edge Case Heavy)

22. `Promise` (constructor, `.then`, `.catch`)
23. `Promise.all`
24. `Promise.race`
25. `Promise.allSettled`

---

✅ Start from the top, and build your confidence with simpler polyfills before diving into asynchronous logic or function binding behavior.
