const prompt = require("prompt-sync")();

let num1 = prompt("Digite o primeiro número:");
let num2 = prompt("Digite o segundo número:");

if (num1/num2%1 === 0) {
    console.log(`O número é par.`);
}
else {
    console.log(`O número é ímpar.`);
}   