const todoForm = document.querySelector('.todo-form');
const todoInput = document.querySelector('#todo-input');
const todoList = document.querySelector('.todo-list');
let toDos = [];

function saveToDos() {
  localStorage.setItem('toDos', JSON.stringify(toDos));
}

function deleteTodo(event) {
  const li = event.target.parentElement;
  li.remove();
  toDos = toDos.filter((toDo) => toDo.id !== parseInt(li.id));
  saveToDos();
}

function writeTodo(newToDoObj) {
  const todoLi = document.createElement('li');
  todoLi.id = newToDoObj.id;
  const todoSpan = document.createElement('span');
  todoSpan.innerText = newToDoObj.text;
  const todoDeleteBtn = document.createElement('span');
  todoDeleteBtn.style.cursor = 'pointer';
  todoDeleteBtn.innerText = '❌';
  todoDeleteBtn.addEventListener('click', deleteTodo);
  todoLi.appendChild(todoSpan);
  todoLi.appendChild(todoDeleteBtn);
  todoList.appendChild(todoLi);
  // console.log(todoLi);
}

function handleSubmit(event) {
  event.preventDefault();
  const newTodo = todoInput.value;
  todoInput.value = '';
  if (newTodo.trim() === '') {
    return;
  } else {
    const newToDoObj = {
      text: newTodo,
      id: Date.now(),
    };
    toDos.push(newToDoObj);
    writeTodo(newToDoObj);
    saveToDos();
    // console.log(JSON.parse(localStorage.getItem('toDos')));
  }
}

todoForm.addEventListener('submit', handleSubmit);

const savedToDos = localStorage.getItem('toDos');

if (savedToDos !== null) {
  const parsedToDos = JSON.parse(savedToDos);
  toDos = parsedToDos;
  parsedToDos.forEach(writeTodo);
}
