console.log(`Digga`);
console.log(`Ich lerne grad HTML und Javascript und CSS`)

window.alert(`Refresh alert`);
//comment auch mit "//"
/* 
    nutz `` für template literal
*/

document.getElementById("myH1").textContent = `Ralf Schumacher ?`;
document.getElementById("myP").textContent = `Willst du wissen wie viel dein Autowert ist?`;

let x;
x = "ein Wichser";
let wahrheit  = true;

console.log(`Du bist ${x} !!!`);
console.log(typeof x);
console.log(`ts true? : ${wahrheit}`);

/*
    window prompt (beginner)
*/

// let username = window.prompt("Wie heißt du noch ma?");
const button_Page1 = document.createElement('button');
const button_Page2 = document.createElement('button');
button_Page1.textContent = `Ja`
button_Page2.textContent = `Ja`

button_Page1.addEventListener('click', () => {
    window.location.href = 'interactive.html';
});

button_Page2.addEventListener('click', () => {
    window.location.href = 'interactive.html';
});

document.body.appendChild(button_Page1);
document.body.appendChild(button_Page2);