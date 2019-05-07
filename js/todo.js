const todoList = document.getElementById('todoList');
const todoItem = document.getElementById('item');
function addItem() {
  if(todoItem.value === "") return;
  const todoItems = todoItem.value;
  todoItem.value = "";
  let li = document.createElement('li');
  li.innerHTML = `<input type="checkbox" onchange="myChange(event)">` + `<span>${ todoItems }</span>` + `<button onclick="deleteItem(event)">Delete</button>`;
  todoList.appendChild(li);
}
function myChange(event){
  event.target.classList.toggle('done');
}
function deleteItem(event){
  const del_parent = event.target.parentElement;
  todoList.removeChild(del_parent);
}
