
const taskInput = document.getElementById('taskInput');
const addTaskBtn = document.getElementById('addTaskBtn');
const taskList = document.getElementById('taskList');

function addTask() {
    const taskText = taskInput.value.trim();
    if (taskText === '') {
        alert('Please enter a task');
        return;
    }

    const listItem = document.createElement('li');
    listItem.className = 'flex justify-between items-center p-2 border-b';

    const taskSpan = document.createElement('span');
    taskSpan.textContent = taskText;
    listItem.appendChild(taskSpan);

    const removeBtn = document.createElement('button');
    removeBtn.className = 'bg-red-500 text-white px-3 py-1 rounded-md';
    removeBtn.textContent = 'Remove';
    removeBtn.onclick = () => {
        taskList.removeChild(listItem);
    };
    listItem.appendChild(removeBtn);

    taskList.appendChild(listItem);

    taskInput.value = '';
}

addTaskBtn.addEventListener('click', addTask);

taskInput.addEventListener('keyup', (event) => {
    if (event.key === 'Enter') {
        addTask();
    }
});


