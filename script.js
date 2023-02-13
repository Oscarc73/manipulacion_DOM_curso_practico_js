const allH1 = document.querySelector('h1');
const parrafo2 = document.querySelector('.parrafo2');
const idparrafo3 = document.querySelector('#parrafo3');
const input = document.querySelector('input');
const dblank = document.getElementById('blank'); // con getElementById no es necesario discriminar si es una clase . o un id #
const imageDivBlank = document.createElement('img');

console.log({
    allH1,
    parrafo2,
    idparrafo3,
    input
});

console.log(input.value);

console.log(idparrafo3.getAttribute('id'));

parrafo2.setAttribute('class', 'pf2');
parrafo2.setAttribute('id', 'parrafo2');

console.log({
    allH1,
    parrafo2,
    idparrafo3,
    input
});

dblank.classList.add('parrafoblank')

imageDivBlank.setAttribute('src', './images/american_football.png')

console.log(imageDivBlank);

dblank.append(imageDivBlank);

