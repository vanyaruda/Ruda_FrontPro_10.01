// get html elements

const addForm = document.querySelector('#addForm')
const taskList = document.querySelector('#addForm')
const taskInput = document.querySelector('#addForm')
const successMessage = document.querySelector('#addForm')

let tasks = [];

const viewInput = (isEmpty) => {

}
const addTask = (event) => {
    event.preventDefault()
    const task = taskInput.value;
    if (task !== '') {
        tasks.push(task)
        taskInput.value = '';
        // render
        successMessage.style.opacity = 1;
    }
}

const renderTasks = () => {
    taskList.innerHTML = ''

    tasks.forEach((task) => {

    })
}

addForm.addEventListener('submit', addTask)