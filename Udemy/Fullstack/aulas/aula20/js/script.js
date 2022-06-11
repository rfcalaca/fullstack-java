function meuEscopo () {
    const form = document.querySelector ('.form');
    const resultado = document.querySelector('.resultado');
    const pessoas = [];

/* essa é uma forma de travar ou navegador para nao enviar o formulario, ele previne uma ação default 
*/

/*Esse modelo é menos moderno
form.onsubmit = function (evento) {
    evento.preventDefault();
    alert(1);
    console.log('Foi Enviado');
};
*/
//let contador = 1;

//vamos fazer assim que fica mais simples

function recebeEventoForm (evento){
    evento.preventDefault();

    const nome = form.querySelector('.nome');
    const sobrenome = form.querySelector('.sobrenome');
    const peso = form.querySelector('.peso');
    const altura = form.querySelector('.altura');

    pessoas.push({
        nome: nome.value,
        sobrenome: sobrenome.value,
        peso: peso.value,
        altura: altura.value
    });

    console.log(pessoas);
    resultado.innerHTML += `<p>${nome.value} ${sobrenome.value}</br></p>`;
    resultado.innerHTML += `<p>Peso ${peso.value}kg, altura ${altura.value}m</br></p>`;
    //document.body.innerHTML += `############## </br>`;
    //console.log(nome.value, sobrenome.value1, peso.value, altura.value);
    
//   console.log(`Nao foi enviado ${contador}`);
//   contador++;
}

form.addEventListener('submit' , recebeEventoForm);
}

meuEscopo();