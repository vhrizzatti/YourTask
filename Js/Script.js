let tasks = [];
let currentFilter = 'all';

function addTask() {
    const input = document.getElementById('taskInput');
    const text = input.value.trim();

    if (text === '') {
        alert('Digite uma tarefa!');
        return;
    }

    tasks.push({ text, done: false });
    input.value = '';
    renderTasks();
}

function toggleTask(index) {
    tasks[index].done = !tasks[index].done;
    renderTasks();
}

function deleteTask(index) {
    tasks.splice(index, 1);
    renderTasks();
}

function filterTasks(filter) {
    currentFilter = filter;
    renderTasks();
}

function renderTasks() {
    const list = document.getElementById('taskList');
    list.innerHTML = '';

    let filteredTasks = tasks;

    if (currentFilter === 'pending') {
        filteredTasks = tasks.filter(t => !t.done);
    } else if (currentFilter === 'done') {
        filteredTasks = tasks.filter(t => t.done);
    }

    filteredTasks.forEach((task, index) => {
        const li = document.createElement('li');

        li.innerHTML = `
            <span class="${task.done ? 'done' : ''}" onclick="toggleTask(${index})">
                ${task.text}
            </span>
            <button onclick="deleteTask(${index})">Excluir</button>
        `;

        list.appendChild(li);
    });
}