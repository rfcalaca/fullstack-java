/*
[] - arrys
{} - objetos
*/

const a = {
    nome: 'Luiz',
    sobrenome: 'Otavio'
};

const b = {...a} //espalhar o valor de "a" dentro de "b"... copiar o valor... para nao ser mais alterado pelas alterações de "a"

a.nome = 'Joao';
console.log(a);
console.log(b);