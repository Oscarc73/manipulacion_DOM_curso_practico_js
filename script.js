const allH1 = document.querySelector('h1');
const parrafo2 = document.querySelector('.parrafo2');
const idparrafo3 = document.querySelector('#parrafo3');
const input1 = document.querySelector('#inputCal1');
const input2 = document.querySelector('#inputCal2');
const btn = document.getElementById('btn-submit');
const pResult = document.querySelector('#result');
const dblank = document.getElementById('blank'); // con getElementById no es necesario discriminar si es una clase . o un id #
const imageDivBlank = document.createElement('img');
const form = document.querySelector("#form__database");
const inputForm = document.querySelector("#inputForm");
const inputName = document.querySelector('#inputForm1');
const inputNumber = document.querySelector('#inputForm2');
const inputEmail = document.querySelector('#inputForm3');
const pPrintForm = document.querySelector('.printForm');


imageDivBlank.style.cssText = 'width: 300px; margin-top: 20px;';//manipulando css en JS

console.log({
    allH1,
    parrafo2,
    idparrafo3,
    input2
});

console.log(idparrafo3.getAttribute('id'));

parrafo2.setAttribute('class', 'pf2');
parrafo2.setAttribute('id', 'parrafo2');

console.log({
    allH1,
    parrafo2,
    idparrafo3,
    input2
});
//resultado partido
function resultadoPartido () {
    let resultEquipo1 = parseInt(input1.value);
    let resultEquipo2 = parseInt(input2.value);

    if (resultEquipo1 == resultEquipo2) {
        pResult.innerText = `Es un Empate`
    } else if (resultEquipo1 > resultEquipo2){
        pResult.innerText = `El ganador es el equipo 1 con ${resultEquipo1} puntos`
    } else if (resultEquipo1 < resultEquipo2){
        pResult.innerText = `El ganador es el equipo 2 con ${resultEquipo2} puntos`
    } else {
        pResult.innerText = `Escribe cual va a ser el resultado para ambos equipos por favor`
    }
}

dblank.classList.add('parrafoblank')

imageDivBlank.setAttribute('src', './images/american_football.png')

console.log(imageDivBlank);

dblank.append(imageDivBlank);

//events form

form.addEventListener('submit', printFormulario)

function printFormulario (event) {
    event.preventDefault();
    let name = inputName.value;
    let number = +inputNumber.value;
    let mail = inputEmail.value;

    pPrintForm.innerHTML = `ya casi`/* `
    Verifica la informacion:
    Nombre completo: ${name}
    Numero de telerono: ${number}
    Correo electronico: ${mail}
    `; */
}

