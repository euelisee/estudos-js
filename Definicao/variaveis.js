// =============================
// Variáveis em JavaScript
// =============================

// Em JavaScript temos três formas de criar variáveis:
// - var   → antiga, quase não usamos mais
// - let   → usamos para variáveis que podem mudar (é como se fosse o String, int, Double em java, porém o let é mais flexível e ele identifica o tipo sozinho)
// - const → usamos para valores que NÃO mudam ( é como se fosse o final em java, ou seja, uma constante)

// -----------------------------
// Exemplo com let
// -----------------------------
let nome = "Lise";       // String → texto
let idade = 29;          // Number → número
let gostaDeCafe = true;  // Boolean → verdadeiro ou falso

console.log("Meu nome é", nome);
console.log("Tenho", idade, "anos");
console.log("Gosto de café?", gostaDeCafe);

// -----------------------------
// Exemplo com const
// -----------------------------
const cidade = "Araçatuba";
console.log("Moro em", cidade);

// Tentar mudar um const dá erro
// cidade = "Curitiba"; // ❌ Isso vai quebrar o código

// -----------------------------
// Tipos de dados
// -----------------------------
let numero = 10;         // Number
let texto = "Olá mundo"; // String
let booleano = false;    // Boolean
let nulo = null;         // Null → não tem valor
let indefinido;          // Undefined → não foi definido

console.log(numero, texto, booleano, nulo, indefinido);

// -----------------------------
// Alterando valores de let
// -----------------------------
let cor = "azul";
console.log("Cor inicial:", cor);

cor = "verde"; // podemos alterar porque usamos let
console.log("Cor alterada:", cor);

// -----------------------------
// Concatenando variáveis
// -----------------------------
console.log("Oi, meu nome é " + nome + " e tenho " + idade + " anos."); // forma antiga
console.log(`Oi, meu nome é ${nome} e tenho ${idade} anos.`);         // template string moderna (mais fácil)

// ==============================
// Resumo rápido
// - let → variável que muda
// - const → variável que não muda
// - var → variável antiga, evite
// - Tipos de dados: string, number, boolean, null, undefined
// ==============================
