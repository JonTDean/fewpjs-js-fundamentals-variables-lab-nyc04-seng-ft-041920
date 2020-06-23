
document.addEventListener("DOMContentLoaded", () => {  
  const form = document.getElementById("importance_form");
  const taskForm = document.getElementById("create-task-form");

  const descriptionButton = document.querySelector('input[value="Create New Task"]');

  const ul = document.getElementById('tasks');
  list_color = form.value;

  // Handles List Creation
  descriptionButton.addEventListener('click', function(){
    event.preventDefault();
    newlist()
  });

  function newlist() {
    let newLi = document.createElement('li');
    newLi.textContent = `${description()} made by: ${userName()}`;
    newLi.style.color = form.value;
    ul.appendChild(newLi);
  }

  function description() {
    let desc = document.getElementById('new-task-description');
    return desc.value;
  }

  function userName(){
    let uName = document.getElementById('new-user-name');
    return uName.value;
  }

});

document.addEventListener('click', function(x){
  const allLi = document.querySelectorAll('ul#tasks > li');
  const taskForm = document.getElementById("create-task-form");
  const deleteButton = document.querySelector('input#delete');


  // Handles List Deletion
  // Create Delete Button
  function createDelete(){
    if (deleteButton == undefined){
      let deleteButton = document.createElement("input");
      deleteButton.setAttribute("type", "button");
      deleteButton.id = "delete";

      
      taskForm.appendChild(deleteButton)
    }
  }

  // List Deletion Logic
  if(x.target && x.target.id == "delete"){
    // Handles List Deletion
    deleteButton.addEventListener('click', function(x){
      event.preventDefault()
      deleteList()
    });
  
    function deleteList(){
      allLi[allLi.length - 1].remove();
    }
  }

  // Empty List Case
  if (allLi.length < 1){
    taskForm.removeChild(deleteButton)
  }
  createDelete()
    
});