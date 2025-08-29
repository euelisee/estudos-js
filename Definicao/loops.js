// =============================
// LOOPS EM JAVASCRIPT
// =============================

// Loops servem para repetir um bloco de código várias vezes.
// Em vez de copiar e colar várias linhas, usamos loops para automatizar a repetição.

// -----------------------------
// Exemplo com FOR
// -----------------------------
// FOR → usamos quando sabemos QUANTAS vezes queremos repetir.
console.log("Exemplo com FOR:");
for (let i = 1; i <= 5; i++) {
    console.log("Contando:", i);
}

// -----------------------------
// Exemplo com WHILE
// -----------------------------
// WHILE → repete ENQUANTO a condição for verdadeira.
console.log("\nExemplo com WHILE:");
let contador = 1;
while (contador <= 5) {
    console.log("Número:", contador);
    contador++;
}

// -----------------------------
// Exemplo com DO WHILE
// -----------------------------
// DO WHILE → executa pelo menos UMA vez, mesmo se a condição for falsa.
console.log("\nExemplo com DO WHILE:");
let x = 6;
do {
    console.log("Rodou pelo menos uma vez, x =", x);
    x++;
} while (x <= 5);

// -----------------------------
// Exemplo com LOOP EM ARRAYS (for...of)
// -----------------------------
// for...of → usado para percorrer listas/arrays.
console.log("\nExemplo com for...of:");
let frutas = ["maçã", "banana", "uva"];
for (let fruta of frutas) {
    console.log("Fruta:", fruta);
}

// -----------------------------
// Exemplo com for...in (objetos)
// -----------------------------
// for...in → usado para percorrer as propriedades de um objeto.
console.log("\nExemplo com for...in:");
let pessoa = { nome: "Lise", idade: 29, cidade: "Araçatuba" };
for (let chave in pessoa) {
    console.log(chave, "=", pessoa[chave]);
}

// ==============================
// RESUMO RÁPIDO
// - for → repete N vezes
// - while → repete enquanto for verdadeiro
// - do while → roda pelo menos uma vez
// - for...of → percorre arrays
// - for...in → percorre objetos
// ==============================