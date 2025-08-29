
const prompt = require("prompt-sync")();

let carro = { marca: "Toyota", modelo: "Corolla", ano: 2020, cor: "Prata" };
for (let chave in carro) {
    console.log(chave, "=", carro[chave]);
}   

