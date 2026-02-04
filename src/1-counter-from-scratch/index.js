let display = document.getElementById('counter');
const button = document.querySelector("#increment");
const button2 = document.querySelector("reset");

let count = 0; 

button.addEventListener('DOMContentLoaded', () => {
    count++;
    document.getElementById('counter').textContent = count;
});