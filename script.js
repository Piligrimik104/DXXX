const D100 = document.getElementById("D100");

D100.onclick = function() {
    D100.textContent = Math.floor(Math.random() * 100) + 1;
};


const D20 = document.getElementById("D20");

D20.onclick = function() {
    D20.textContent = Math.floor(Math.random() * 20) + 1;
};


const D8 = document.getElementById("D8");

D8.onclick = function() {
    D8.textContent = Math.floor(Math.random() * 8) + 1;
};


const D6 = document.getElementById("D6");

D6.onclick = function() {
    D6.textContent = Math.floor(Math.random() * 6) + 1;
};


const D4 = document.getElementById("D4");

D4.onclick = function() {
    D4.textContent = Math.floor(Math.random() * 4) + 1;
};