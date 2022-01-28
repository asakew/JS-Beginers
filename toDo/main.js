const todoList = document.querySelector('#todo-list');
const todoForm = document.querySelector('#todo-form');
const todoInput = document.querySelector('#todo-input');

todoForm.addEventListener('submit', formHandler);

function formHandler(enent) {
  event.preventDefault();
  
  const taskText = todoInput.value;
  
  const li = `<li>${taskText}</li>`;
  
  todoList.insertAdjacentHTML("beforeend", li);
  
  // clear input
  todoInput.value = '';
  todoInput.focus;
}