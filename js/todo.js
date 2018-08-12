const todoList = document.getElementById('todoList');
const todoItem = document.getElementById('item');
function addItem() {
  const todoItems = [];
  if(todoItem.value === "") return;
  todoItems.push(todoItem.value);
  todoItem.value = "";
  for (i in todoItems){
    let li = document.createElement('li');
    li.innerHTML =  `<span>${ todoItems[i] }</span>`;
    todoList.appendChild(li);
  }
}
