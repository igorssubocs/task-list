const todoList = document.querySelector('#to-do__list');
const todoForm = document.querySelector('#to-do__form');
const todoInput = document.querySelector('#to-do__input');

const button = document.querySelector('#changeBg-btn')

const maxTasks = 10;

todoForm.addEventListener('submit', formEditor);

function formEditor(event) {
    event.preventDefault();
    const tastText = todoInput.value;
    console.log(tastText);

    const li = `<li>${tastText}</li>`;
    console.log(li);
    todoList.insertAdjacentHTML('beforeend', li);

    todoInput.value = '';
}