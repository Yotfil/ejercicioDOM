const btnList = document.getElementById('btnList');
const btnTask = document.getElementById('btnTask');
function enterTask() {
    var getTask = prompt('Ingresa tu Tarea');
    const taskList = document.getElementById('taskList');
    const task = document.createElement('li');
    task.textContent = getTask;
    taskList.appendChild(task);
    task.addEventListener('click', ()=>{
        task.remove()
    })
}
btnTask.addEventListener('click', enterTask);
const inputList = document.getElementById('inputList');

function enterList() {
    const inputList = document.getElementById('inputList').value;
    const list = document.getElementById('list');
    const itemList = document.createElement('li');
    itemList.textContent = inputList;
    list.appendChild(itemList);
    itemList.addEventListener('click', () => {
        itemList.classList.toggle('tachado');
    });
    itemList.addEventListener('dblclick', () => {
        itemList.remove();
    });
}


btnList.onclick = function() {
    enterList();
};
