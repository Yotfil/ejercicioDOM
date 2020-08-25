const img = document.getElementById('img');
const nPipe = document.getElementById('nPipe');
const ePipe = document.getElementById('ePipe');
const cPipe = document.getElementById('cPipe');
const pPipe = document.getElementById('pPipe');

const img2 = document.getElementById('img2');
const nJara = document.getElementById('nJara');
const eJara = document.getElementById('eJara');
const cJara = document.getElementById('cJara');
const pJara = document.getElementById('pJara');

const img3 = document.getElementById('img3');
const nYeison = document.getElementById('nYeison');
const eYeison = document.getElementById('eYeison');
const cYeison = document.getElementById('cYeison');
const pYeison = document.getElementById('pYeison');

img.addEventListener('click', () => {
    const name = prompt('Ingresa el nombre');
    nPipe.textContent = name;
    nPipe.addEventListener('click', () => {
        nPipe.remove();
    });
    const age = prompt('Ingresa la edad');
    ePipe.textContent = age;
    ePipe.addEventListener('click', () => {
        ePipe.remove();
    });
    const city = prompt('Ingresa la ciudad de origen');
    cPipe.textContent = city;
    cPipe.addEventListener('click', () => {
        cPipe.remove();
    });
    const profession = prompt('Ingresa la profesión');
    pPipe.textContent = profession;
    pPipe.addEventListener('click', () => {
        pPipe.remove();
    });
});

img2.addEventListener('click', () => {
    const name = prompt('Ingresa el nombre');
    nJara.textContent = name;
    nJara.addEventListener('click', () => {
        nJara.remove();
    });
    const age = prompt('Ingresa la edad');
    eJara.textContent = age;
    eJara.addEventListener('click', () => {
        eJara.remove();
    });
    const city = prompt('Ingresa la ciudad de origen');
    cJara.textContent = city;
    cJara.addEventListener('click', () => {
        cJara.remove();
    });
    const profession = prompt('Ingresa la profesión');
    pJara.textContent = profession;
    pJara.addEventListener('click', () => {
        pJara.remove();
    });
});

img3.addEventListener('click', () => {
    const name = prompt('Ingresa el nombre');
    nYeison.textContent = name;
    nYeison.addEventListener('click', () => {
        nYeison.remove();
    });
    const age = prompt('Ingresa la edad');
    eYeison.textContent = age;
    eYeison.addEventListener('click', () => {
        eYeison.remove();
    });
    const city = prompt('Ingresa la ciudad de origen');
    cYeison.textContent = city;
    cYeison.addEventListener('click', () => {
        cYeison.remove();
    });
    const profession = prompt('Ingresa la profesión');
    pYeison.textContent = profession;
    pYeison.addEventListener('click', () => {
        pYeison.remove();
    });
});
