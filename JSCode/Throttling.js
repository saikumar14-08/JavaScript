const Throttling = (fn, delay) => {
  let lastCall = 0;
  return (...args) => {
    let now = new Date().getTime();
    if(now-lastCall >= delay) {
      fn(...args);
      lastCall = now;
    }
  }
}

let btnId = document.getElementById("click-btn");
let throttleCheck = Throttling(()=> console.log("Button Clicked"),2500)
btnId.addEventListener("click", throttleCheck);