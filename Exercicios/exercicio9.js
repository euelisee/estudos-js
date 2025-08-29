const prompt = require("prompt-sync")();    

let num1 = Number(prompt("Digite o primeiro número:"));
let num2 = Number(prompt("Digite o segundo número:"));
let operacao = prompt("Digite a operação (+, -, *, /):");   
switch (operacao) {
    case "+":
        num1 + num2;
        console.log(`A soma de ${num1} + ${num2} é: ${num1 + num2}`);
        break;
    case "-":
        num1 - num2;
        console.log(`A subtração de ${num1} - ${num2} é: ${num1 - num2}`);
        break;
    case "*":
        num1 * num2;
        console.log(`A multiplicação de ${num1} * ${num2} é: ${num1 * num2}`);
        break;
    case "/":
        num1 / num2;
        console.log(`A divisão de ${num1} / ${num2} é: ${num1 / num2}`);
        break;
    default:
        break;      
}   