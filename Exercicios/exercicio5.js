const prompt = require("prompt-sync")();

let num = Number(prompt("Digite um número para somar:"));
let soma = 0;
let i = 1;  

for (let i = 1; i <= num; i++) {
    soma = soma + i;
    console.log(i);
}
 
console.log(`A soma total de 1 até ${num} é : ${soma}.`);
