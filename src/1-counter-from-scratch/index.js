const display = document.querySelector("#counter");
const increment = document.querySelector("#increment");
const reset = document.querySelector("#reset");

let count = 0;

increment.addEventListener("click", () => {
  count += 1;
  display.textContent = count;
});

reset.addEventListener("click", () => {
  count = 0;
  display.textContent = count;
});
