const pessoa1 = {
    nome: 'Rafael',
    sobrenome: 'Calaça',
    idade: 35,

    fala() {
        console.log(`${this.nome} ${this.sobrenome} esta falando oi... e tem ${this.idade} anos`);
    }, //para criar mais um metodo, separe adicionando uma virgula como feito aqui

    incrementaIdade(){
        ++this.idade;
    }
};

pessoa1.fala()
