const imgBtn = document.querySelectorAll('.imgBtn');
// console.log(imgBtn);
for (let i = 0; i < imgBtn.length; i += 1) {
    imgBtn[i].addEventListener('click', e => {
        const container = e.target.closest('.container');
        /*
            -Con e.target encuentro en qué elemento se está ejecutando el evento
            -con 'closest' le digo que buque desde e.target hacia arriba el primer elemento que se llame ".container"
        */
        container.querySelector('.nameBtn').textContent = prompt(
            'Escribe el nombre del artista'
        );
        /*
            -Le digo que dentro de container encuentre el elemento '.nameBtn'
            -Con "textContent" le digo que remplace el contenido de '.nameBtn' con el contenido de la respuesta del prompt
        */
        container.querySelector('.ageBtn').textContent = prompt(
            '¿Cuantos años tiene?'
        );
        container.querySelector('.cityBtn').textContent = prompt(
            '¿Cual es su ciudad de Origen?'
        );
        container.querySelector('.professionBtn').textContent = prompt(
            '¿Cual es su profesión?'
        );
    });
}
const voidBtn = document.querySelectorAll('.voidBtn');
for (let i = 0; i < voidBtn.length; i += 1) {
    voidBtn[i].addEventListener('click', e => {
        e.target.textContent = '';
    });
}
