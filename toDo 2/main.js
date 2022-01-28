const todoList = document.querySelector('#todo-list');
const todoForm = document.querySelector('#todo-form');
const todoInput = document.querySelector('#todo-input');

todoForm.addEventListener('submit', formHandler);

function formHandler(enent) {
  event.preventDefault();

  const taskText = todoInput.value;

  const newTask = document.querySelector('li');
  
  newTask.innerText(taskText)

  // clear input
  todoInput.value = '';
  todoInput.focus;
}