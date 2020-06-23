document.addEventListener("DOMContentLoaded", () => {
  const createButton = document.querySelector('input[value="Create New Task"]');
  const deleteButton = document.querySelector('input[value="Delete Task"]');
  const ul = document.getElementById('tasks');


  // Handles List Creation
  createButton.addEventListener('click', function(x){
    event.preventDefault()
    newlist()
  });

  function newlist() {
    let newLi = document.createElement('li');
    newLi.textContent = description()
    ul.appendChild(newLi);
  }

  function description() {
    let desc = document.getElementById('new-task-description');
       let newText = desc.value;
       return newText
    }

  // Handles List Deletion
  deleteButton.addEventListener('click', function(x){
    event.preventDefault()
    deleteList()
  });

  function deleteList(){
    allLi = document.querySelectorAll('ul#tasks > li')
    allLi[allLi.length - 1].remove()
  }

});
