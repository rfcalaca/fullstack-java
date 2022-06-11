// IEEE 754-2008 = padrao do js para precisao de numeros
//let num1 = 10 ;
//let num2 = 2.5;

//console.log(num1.toString() + num2); //converte para string para fazer algo
//console.log(typeof num1); // Verifica o tipo de algo
//num1 = num1.toString(); // altera para sempre o valor da variavel para o tipo string
//console.log(num1.toString(2)); // convert para a representação binaria
//console.log(num1.toFixed(2)); // arrendonda um numero para apenas 2 casas decimais ex: 10.45465465878643 para 10.45
//let temp = num1 * '5';
//console.log(Number.isNaN(num1));

let num1 = 0.7; 
let num2 = 0.1;

num1 += num2; // 0.8
num1 += num2; // 0.9
num1 += num2; // 1.0
// usando o toFixed(2) vai parecer certo aos olhos mas a conta nao bate quando for checar os binarios
num1 = parseFloat(num1.toFixed(2)); // dessa forma resolveria o problema
num1 = Number(num1.toFixed(2)); // resolve o problema da mesma maneira que o metodo acima

console.log(num1);
console.log(Number.isInteger(num1)); //verifica se o numero é inteiro

num1 = ((num1 * 100) + (num2 * 100)) / 100; //0.8  uma outra alternativa para calcular com numeros flutuantes.

num1 = Number(num1.toFixed(2)); // mehor forma para contornar um problema de imprecisao 

