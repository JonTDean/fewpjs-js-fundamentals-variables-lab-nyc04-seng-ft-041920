document.addEventListener("DOMContentLoaded", () => {
  const inputButton = document.querySelector('input[type="submit"]');
    const ul = document.getElementById('tasks');


  inputButton.addEventListener('click', function(x){
    event.preventDefault()
    newlist()
    

    


  })


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



});
