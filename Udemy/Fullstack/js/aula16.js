let numero = Number(prompt('Digite um numero:'));
const numeroTitulo = document.getElementById('numero-titulo');
const texto = document.getElementById('texto');

numeroTitulo.innerHTML = numero;
texto.innerHTML = `<p> Seu numero + 2 é ${Number(numero) + 2}.</p>`;
texto.innerHTML += `<p> A Raiz Quadrada de ${numero} é ${Math.sqrt(numero)}</p>`;
texto.innerHTML += `<p> ${numero} é inteiro? <strong>${Number.isInteger(numero)}</strong></p>`;
texto.innerHTML += `<p> O numero ${numero} é NaN? ${isNaN(numero)}</p>`;
texto.innerHTML += `<p> Arredondando para baixo da: ${Math.floor(numero)} </p>`;
texto.innerHTML += `<p> Arredondando para cima da: ${Math.ceil(numero)}</p>`;
texto.innerHTML += `<p> Com duas casas decimais fica: ${numero.toFixed(2)}</p>`;