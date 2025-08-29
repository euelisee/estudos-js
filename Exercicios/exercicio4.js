const prompt = require("prompt-sync")();

let num = prompt("Digite um número para a tabuada:");

for (let i = 1; i <= 10; i++) {
    console.log(`${num} x ${i} = ${num * i}`);
}