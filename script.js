let inputTask = document.getElementById('input-task');
let addButton = document.getElementById('add-task-button');
let taskList = document.getElementById('task-list');
let tasks;

function addList() {
    addButton.addEventListener('click', function () {
        let newList = document.createElement('li');
        newList.innerHTML = `<input type="checkbox">
    <span class="task">${inputTask.value}</span>
    <button class="delete-btn">delete</button>`
        taskList.appendChild(newList);
        inputTask.value = "";

        removeList()
        toLocal();
    });
}

function removeList() {
    let deleteButton = document.querySelectorAll('.delete-btn');
    deleteButton.forEach(e => {
        e.addEventListener('click', function () {
            this.parentElement.remove();
            toLocal()
        });
    });
}

function toLocal() {
    tasks = taskList.innerHTML;
    localStorage.setItem('tasks', tasks);
}

if (localStorage.getItem('tasks')) {
    taskList.innerHTML = localStorage.getItem('tasks');
}

addList()
removeList();
toLocal();
