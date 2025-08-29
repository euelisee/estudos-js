// =============================
// CONDICIONAIS EM JAVASCRIPT
// =============================

// -----------------------------
// if / else
// -----------------------------
let idade = 18;

if (idade >= 18) {
    console.log("Você é maior de idade");
} else {
    console.log("Você é menor de idade");
}

// -----------------------------
// if / else if / else
// -----------------------------
let hora = 15;

if (hora < 12) {
    console.log("Bom dia");
} else if (hora < 18) {
    console.log("Boa tarde");
} else {
    console.log("Boa noite");
}

// -----------------------------
// switch case (outra forma)
// -----------------------------
let cor = "azul";

switch (cor) {
    case "vermelho":
        console.log("A cor é vermelho");
        break;
    case "azul":
        console.log("A cor é azul");
        break;
    case "verde":
        console.log("A cor é verde");
        break;
    default:
        console.log("Cor desconhecida");
}
