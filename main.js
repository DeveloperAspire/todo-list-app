// GRAB THE ELEMENTS FROM THE DOM
const input = document.querySelector('#input');
const button = document.querySelector('#button');
const inputContainer = document.querySelector('#input-con');
const taskSection = document.querySelector('#tasksection');
const taskList = document.querySelector('#tasklist');



// ONLOAD THIS GETS THE DATA FROM LOCAL STORAGE AND RENDER TO UI

// DOM load event
document.addEventListener('DOMContentLoaded', showTasks)

function showTasks(){
  let todos
  if(localStorage.getItem('todos' === null)){
    todos = []
  } else{
    todos = JSON.parse(localStorage.getItem('todos'))
  }
  todos.forEach((todo)=>{
    // THIS CREATES THE LIST OF TASK
    const childList = document.createElement('li');
    childList.classList.add('check');

    // CREATED DIV TO HOLD INPUT AND SPAN
    const checkedDiv= document.createElement('div');

    // CREATED INPUT AND SET VALUE
    const checkedItem = document.createElement('input');
    checkedItem.setAtteribute("type", "checkbox");
  
    // CREATED SPAN AND IT TEXT
    const span = document.createElement('span')
    span.classList.add('ml-2')
    span.textContent= todo;

    // APPEND VALUE TO DIV
    checkedDiv.appendChild(checkedItem)
    checkedDiv.appendChild(span)

    // CREATED ICON
    const icon = document.createElement('i')
    icon.classList.add('far', 'fa-trash-alt')

    // APPEND DIV AND ICON TO THE LIST OF TASK
    childList.appendChild(checkedDiv);
    childList.appendChild(icon);

    // RENDER TO HTML PAGE
    taskSection.classList.remove('hidden')
    taskSection.appendChild(childList)

  })

}


// ADD TASK TO THE TODO LIST
function addElement(){

    // THIS CREATES THE LIST OF TASK
    const childList = document.createElement('li');
    childList.classList.add('check');

    // CREATED DIV TO HOLD INPUT AND SPAN
    const checkedDiv= document.createElement('div');

    // CREATED INPUT AND SET VALUE
    const checkedItem = document.createElement('input');
    checkedItem.setAttribute("type", "checkbox");
  
    // CREATED SPAN AND IT TEXT
    const span = document.createElement('span')
    span.classList.add('ml-2')
    span.textContent= input.value;

    // APPEND VALUE TO DIV
    checkedDiv.appendChild(checkedItem)
    checkedDiv.appendChild(span)

    // CREATED ICON
    const icon = document.createElement('i')
    icon.classList.add('far', 'fa-trash-alt')

    // APPEND DIV AND ICON TO THE LIST OF TASK
    childList.appendChild(checkedDiv);
    childList.appendChild(icon);

    // RENDER TO HTML PAGE
    taskSection.classList.remove('hidden')
    taskSection.appendChild(childList)

    // CLEAR INPUT
    setTimeout(function clearInput(){
        input.value=""
    }, 500)


    // VALIDATE FOR EMPTY INPUT
    checkValidation(input.value, childList)

    // STORE TASK TO LOCAL STORAGE
   storeToLocalStorage(input.value)




}


// VALIDATION THE INPUT FOR EMPTY INPUATION

function checkValidation(inputData, childList){
  if(inputData == ""){
    input.classList.add('border','border-red-400')
    
    taskSection.removeChild(childList)


    setTimeout(function removeBorder(){
        input.classList.remove('border','border-red-400')
    },700)
}

}

// DELETE TASK FROM THE TODO LIST
function deleteTask(e){
  task = e.target
  if(task.classList.contains('far')){
    taskSection.removeChild(task.parentElement)

    // DELETE FROM LOCAL STORAGE
    deleteTaskFromLocalStorage(task.parentElement)

  }
}

// STORE TO LOCAL STORAGE
function storeToLocalStorage(todo){
  let todos;

  if(localStorage.getItem('todos') === null){
    todos=[]
  } else{
    todos= JSON.parse(localStorage.getItem('todos'))
  }

  todos.push(todo)

  localStorage.setItem('todos', JSON.stringify(todos))
}

// DELETE FROM LOCAL STORAGE WHEN USER DELETES
 function deleteTaskFromLocalStorage(todo) {
  let todos;

  if(localStorage.getItem('todos') === null){
    todos=[]
  } else{
    todos= JSON.parse(localStorage.getItem('todos'))
  }

  todos.forEach((todoItem, index)=>{
    if(todoItem === todo.textContent){
      todos.splice(index, 1)
    }
  })

  localStorage.setItem('todos', JSON.stringify(todos))
   
 }







// EVENT LISTENERS LOAD

loadEventListener()

function loadEventListener() {

button.addEventListener('click',addElement)
 taskSection.addEventListener('click', deleteTask)


}

