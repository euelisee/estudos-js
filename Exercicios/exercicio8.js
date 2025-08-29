const prompt = require('prompt-sync')();

let idade = Number(prompt("Digite sua idade:"));

if (idade <= 12) {
    console.log("Você é criança");
} else if (idade < 18) {
    console.log("Você é adolescente");
} else {
    console.log("Você é adulto");
}   