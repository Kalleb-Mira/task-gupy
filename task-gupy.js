
let INDICE = 13;
let SOMA = 0;
let K = 0;

while (K < INDICE) {
    K++;
    SOMA += K;
}

console.log(`1) O valor final de SOMA é: ${SOMA}`);

// 2. Verificar se um número pertence à sequência de Fibonacci
function isFibonacci(number) {
    let a = 0, b = 1;
    while (b < number) {
        [a, b] = [b, a + b];
    }
    return b === number || number === 0;
}

// Exemplo de uso:
const number = parseInt(prompt("Informe um número para verificar se pertence à sequência de Fibonacci: "));
if (isFibonacci(number)) {
    console.log(`2) O número ${number} pertence à sequência de Fibonacci.`);
} else {
    console.log(`2) O número ${number} não pertence à sequência de Fibonacci.`);
}


const data = [
    { dia: 1, faturamento: 22174.1664 },
    { dia: 2, faturamento: 24537.6698 },
    { dia: 3, faturamento: 26139.6134 },
    { dia: 4, faturamento: 0.0 },
    { dia: 5, faturamento: 0.0 },
    { dia: 6, faturamento: 26742.6612 },
    { dia: 7, faturamento: 0.0 }
];

const validFaturamentos = data.filter(d => d.faturamento > 0).map(d => d.faturamento);
const menorValor = Math.min(...validFaturamentos);
const maiorValor = Math.max(...validFaturamentos);
const mediaMensal = validFaturamentos.reduce((sum, val) => sum + val, 0) / validFaturamentos.length;
const diasAcimaDaMedia = validFaturamentos.filter(f => f > mediaMensal).length;

console.log(`3) Menor valor de faturamento: ${menorValor}`);
console.log(`3) Maior valor de faturamento: ${maiorValor}`);
console.log(`3) Dias com faturamento acima da média mensal: ${diasAcimaDaMedia}`);


const faturamentoEstados = {
    SP: 67836.43,
    RJ: 36678.66,
    MG: 29229.88,
    ES: 27165.48,
    Outros: 19849.53
};

const totalFaturamento = Object.values(faturamentoEstados).reduce((sum, val) => sum + val, 0);
const percentuais = Object.fromEntries(
    Object.entries(faturamentoEstados).map(([estado, valor]) => [estado, (valor / totalFaturamento) * 100])
);

console.log("4) Percentuais de representação por estado:");
for (const [estado, percentual] of Object.entries(percentuais)) {
    console.log(`   ${estado}: ${percentual.toFixed(2)}%`);
}


function reverseString(string) {
    let reversedStr = "";
    for (let char of string) {
        reversedStr = char + reversedStr;
    }
    return reversedStr;
}

// Exemplo de uso:
const string = prompt("Digite uma string para ser invertida: ");
console.log(`5) String invertida: ${reverseString(string)}`);