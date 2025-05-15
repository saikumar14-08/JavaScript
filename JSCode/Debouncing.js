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