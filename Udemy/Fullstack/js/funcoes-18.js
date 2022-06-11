   function soma(x, y) {             //essa é a função que cria um parametro, definido pela função x e y que receberão valores posteriormente
       const resultado = x + y;      // aqui foi definido que X e Y irao se somar ou concatenar em caso de strings
       return resultado;             // return defini que sera retornado o valor para resultado, apos o return nada mais sera processado
   }

   const resultado = soma(1, 2);     // aqui foi definido os valores para x e y respectivamente
   console.log(resultado)            // mostra o resultado

//** */
   const raiz = function (n) { //aqui foi definido que a variavel raiz recebe a função de raiz quadrada para N
       return n ** 0.5;
   }

   console.log(raiz(9));        //aqui fara a raiz quadrada para 9 que sera 3
   console.log(raiz(16));
   console.log(raiz(25));

const raiz = n => n ** 0.5;  // essa é a forma simplificada para a função, tambem conhecida com aero function

console.log(raiz(9));        //aqui fara a raiz quadrada para 9 que sera 3
console.log(raiz(16));
console.log(raiz(25));
