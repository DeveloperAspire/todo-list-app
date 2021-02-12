// GRAB THE ELEMENTS FROM THE DOM
const input = document.querySelector('#input');
const button = document.querySelector('#button');
const inputContainer = document.querySelector('#input-con');
const taskSection = document.querySelector('#tasksection');
const taskList = document.querySelector('#tasklist');




// THIS FUNCTION ADDS TASK, VALIDATE INPUT AND ALSO DELETE IT
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

     checkValidation(input.value, childList)

    // CLEAR INPUT

    setTimeout(function clearInput(){
        input.value=""
    }, 500)

    // IF DELETE ICON  IS CLICKED

    icon.addEventListener('click', removetaskList);

    // THIS FUNCTION ACTS FOR REMOVING TASK

  function removetaskList(e) {

 taskSection.removeChild(childList)


  }




}

// VALIDATION

function checkValidation(inputData, childList){
  if(inputData == ""){
    input.classList.add('border','border-red-400')
    
    taskSection.removeChild(childList)


    setTimeout(function removeBorder(){
        input.classList.remove('border','border-red-400')
    },700)
}

}









// EVENT LISTENERS LOAD

loadEventListener()

function loadEventListener() {
  

button.addEventListener('click',addElement)
 taskSection.addEventListener('click', deleteTask)


}

