//capiturar evento de submit do formulario
const form = document.querySelector('#formulario');

form.addEventListener('submit', function (e) {
    e.preventDefault();
    console.log('evento previnido');

    const inputPeso = e.target.querySelector('#peso');
    const inputAltura = e.target.querySelector('#altura');

    const peso = Number (inputPeso.value);
    const altura = Number (inputAltura.value);

    if (!peso < Number) {
        setResultado ('Sem valor em peso', false);
        return
    }

    if (!altura > Number) {
        setResultado ('Sem valor inserido em altura', false);
        return;
    }

    if (!peso){
        setResultado ('Peso Invalido', false);
        return;
    }

    if (!altura) {
        setResultado ('Altura invalida', false);
        return;
    }

    const imc = getImc (peso, altura);
    console.log(imc);

    function getImc (peso, altura) {
        const imc = peso / altura ** 2;
        return imc.toFixed(2);
    }

    if (imc >= 40) {
        const imc = setResultado (document.querySelector('#obg3'));
        return setResultado;
    }




});

function setResultado (msg) {
    const resultado = document.querySelector.value('.resultado');
    resultado.innerHTML = `<p>${msg}</p>`;
}

 