// =============================
// Funções em JavaScript
// =============================

// Uma função é um "bloco de código" que podemos reaproveitar várias vezes.
// Em vez de repetir o mesmo código, a gente cria uma função e só chama ela quando precisar.

// -----------------------------
// Exemplo 1 - Função simples (sem parâmetros)
// -----------------------------
function dizerOi() {
    console.log("Oi! Seja bem-vinda ao mundo das funções ");
}

// Chamando a função
dizerOi();
dizerOi(); // podemos chamar quantas vezes quisermos


// -----------------------------
// Exemplo 2 - Função com parâmetros
// -----------------------------
function saudacao(nome) {
    console.log("Olá,", nome, "! Como vai?");
}

saudacao("Lise");
saudacao("Netuno");


// -----------------------------
// Exemplo 3 - Função que retorna valor
// -----------------------------
function somar(a, b) {
    return a + b; // "return" devolve o resultado
}

let resultado = somar(5, 7);
console.log("Resultado da soma:", resultado);


// -----------------------------
// Exemplo 4 - Função com Arrow Function (forma moderna)
// -----------------------------
// Arrow Functions são mais curtas, mas funcionam parecido
const multiplicar = (x, y) => x * y;

console.log("Multiplicação:", multiplicar(3, 4));


// -----------------------------
// Exemplo 5 - Função dentro de outra função
// -----------------------------
function calcularDobro(numero) {
    function dobro(n) {
        return n * 2;
    }
    return dobro(numero);
}

console.log("Dobro de 10 é:", calcularDobro(10));


// =============================
// Resumo rápido
// - Função é um bloco de código que podemos reaproveitar
// - Pode receber parâmetros e retornar valores
// - Formas: function normal ou arrow function
// =============================
