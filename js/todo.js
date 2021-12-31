const formEl = document.querySelector("#todo-form");
const inputEl = document.querySelector("#todo-form input")
const listEl = document.querySelector("#todo-list");
let toDos = [];

function saveToDos() {
  localStorage.setItem("todos", JSON.stringify(toDos));
}

function deleteTodo(event) {
  const li = event.target.parentElement;
  li.remove();
  toDos = toDos.filter((task) => task.id !== parseInt(li.id));
  saveToDos();
}

function paintToDo(task) {
  const li = document.createElement("li");
  li.id = task.id;
  const span = document.createElement("span");
  const deleteBtn = document.createElement("button");
  deleteBtn.innerText = '❌';
  deleteBtn.addEventListener('click', deleteTodo)
  //li tag 안에 span tag append.
  li.appendChild(span);
  li.appendChild(deleteBtn);
  span.innerText = task.text;
  listEl.appendChild(li);
}

function handleToDoSubmit (event) {
  event.preventDefault();
  const task = inputEl.value;
  inputEl.value = "";
  const newTodoObj = {
    text:task,
    id:Date.now()
  };
  toDos.push(newTodoObj);
  paintToDo(newTodoObj);
  saveToDos();
}

formEl.addEventListener('submit', handleToDoSubmit);

const savedToDos = localStorage.getItem("todos");

if (savedToDos) {
  const parsedToDos = JSON.parse(savedToDos);
  toDos = parsedToDos;
  parsedToDos.forEach(paintToDo);
}
