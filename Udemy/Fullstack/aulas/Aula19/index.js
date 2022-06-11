 /*
 Pimitivos (imutaveis) - string, numer, boolean, undefined,
 null (bigint, symbol)
 */

 let nome = 'Rafael';
 nome[0] = 'L'; //quando o dado é primitivo independente desse set na variavel, nao ocorrera nada
 console.log(nome[0], nome);

/*
[Running] node "d:\OneDrive\Cursos\Java Script - Udemy\JS\Aula19\index.js"
R Rafael 

*/

let a = 'A';
let b = a; //nesse momento b recebe uma copia do valor de "a" 
console.log(a, b);

a = 'Outra coisa';
console.log(a, b); // nesse momento o valor de "a" foi alterado, porem o valor de "b" nao sera afetado pois recebeu uma copia do valor

/////////////////////////////////////////////////////////////////////////
console.log('VALORES NAO PRIMITIVOS - SAO PASSADOS POR REFERENCIA E SAO MUTAVEIS');
// REFERENCIA MUTAVEL - ARRAY, OBJECT, FUNCTION

let c = [1, 2, 3];
let d = c;
//nesse momento a e b estao sendo apontados para um valor na memoria
console.log(c, d);

c.push(4);
console.log(c, d);
// aqui podemos ver que mesmo alterando apenas o valor de "c", o valor de "d" tambem recebe o mesmo valor

d.pop(); //esse comando retira um valor de d
console.log(c, d);
//como foi retirado o valor da variavel de "d" o valor de "c" tambem foi alterado

// para copiar o valor de "a" para a variavel "b" deve-se utilizar (let b = [...a];) 