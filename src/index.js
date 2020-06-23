document.addEventListener("DOMContentLoaded", () => {
  const inputButton = document.querySelector('input[type="submit"]');
    const ul = document.getElementById('tasks');


  inputButton.addEventListener('click', function(x){
    event.preventDefault()
    newlist()
    


  })


 function newlist() {
     let newli = document.createElement('li');
       ul.appendChild(newli);


 }




});
