const todoList = [];
const todoList2 = [];
const inputElement = document.querySelector('.js-todo-input')
const inputElement2 = document.querySelector('.js-todo-input2')
const dateElement = document.querySelector('.js-todo-ymd')

inputElement.addEventListener('keydown', (event) => {
  if(event.key === 'Enter') {
    addTodo();
  }
})

function addTodo() {  
  const name = inputElement.value;
  todoList.push(name);
  console.log(todoList);
  inputElement.value = "";

  let todoListHTML = '';

  for (let i = 0 ; i < todoList.length; i++){
    const todo = todoList[i];
    const html = `<p>${todo} <button class="delete-button">Delete</button></p>`;
    todoListHTML += html;
  }

  document.querySelector('.js-todo-list').innerHTML = todoListHTML;

}

function addTodoImproved(){

  if(inputElement2.value != ""){
    const name = inputElement2.value;
    const dueDate = dateElement.value;
    todoList2.push({name: name, dueDate: dueDate}); //can also be (name, dueDate if both the names are same)
    
    inputElement2.value = '';
    dateElement.value = '';
    
  }

  renderTodoList2();

}

function renderTodoList2(){
  let todoListHTML2 = '';

  for (let i = 0; i < todoList2.length; i++){
    const todoObject = todoList2[i];
    const {name, dueDate} = todoObject;
    const html2 = `<div class="improved-todo">${name}</div>
    <div>${dueDate} </div>
    <div><button class="delete-button" 
    onclick="todoList2.splice(${i}, 1); renderTodoList2();"
    >Delete</button></div>`;
    todoListHTML2 += html2;
  }

  document.querySelector('.js-todo-list2').innerHTML = todoListHTML2;
}

function resetList1() {
  todoList.length = 0;
  document.querySelector('.js-todo-list').innerHTML = '';
}

function resetList2() {
  todoList2.length = 0;
  inputElement2.innerHTML = '';
  dateElement.value = '';
  renderTodoList2();
}