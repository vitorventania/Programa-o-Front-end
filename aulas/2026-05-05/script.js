const taskList = document.getElementById('taskList');
const taskInput = document.getElementById('taskInput');

function addTask(){
  let input = taskInput.value.trim()
  if(input){
    let newItem = document.createElement('li')
    newItem.innerHTML = `
    <span>${input}</span>
    `;
    taskList.appendChild(newItem)
  }
  taskInput.value = "";
}