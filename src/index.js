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
    let newli = document.createElement('li');
    ul.appendChild(newli);
  }

  // Handles List Deletion
  deleteButton.addEventListener('click', function(x){
    event.preventDefault()
    deleteList()
  });

  function deleteList(){
    allLi = document.querySelectorAll('ul#tasks > li')
    console.log(`${allLi[allLi.length - 1]}`)
    
  }
  





});
