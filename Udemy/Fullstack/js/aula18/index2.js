// considerado uma fabrica de objetos
//conhecido como factory
function criaPessoa (nome, sobrenome, idade) {
    return { nome, sobrenome, idade };
}

const pessoa1 = criaPessoa('Luiz', 'Miranda', 25);
const pessoa2 = criaPessoa('Claudio', 'Miranda', 26);
const pessoa3 = criaPessoa('Rafael', 'Miranda', 27);
const pessoa4 = criaPessoa('Teles', 'Miranda', 28);
const pessoa5 = criaPessoa('Joel', 'Miranda', 29);

console.log(pessoa2)