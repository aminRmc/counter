let count = document.querySelectorAll(`#counter`)
console.log(count);
let counts = setInterval(updated);
let i = 0
function updated() {

    count[0].innerHTML = ++i;
    
    if (i === 1000) {
        clearInterval(counts);
    }}

let counts2 = setInterval(updated2);
let i2 = 0
function updated2() {

    count[1].innerHTML = ++i2;
    
    if (i2 === 8000) {
        clearInterval(counts2);
    }}



let counts3 = setInterval(updated3);
let i3 = 0
function updated3() {

    count[2].innerHTML = ++i3;
    
    if (i3 === 5000) {
        clearInterval(counts3);
    }}
