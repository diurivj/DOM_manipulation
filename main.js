let button = document.getElementById('change-color')
let title = document.getElementsByTagName('h1')
let buttonAddTodo = document.getElementById('addTodo')
let todo = document.getElementsByName('todo')
let list = document.getElementById('list')

function changeColor() {
  if (title[0].style.color === 'blue') {
    title[0].style.color = 'red'
    title[0].innerText = 'My first To do list'
    button.innerText = 'Change color'  
  } else {
    title[0].style.color = 'blue'
    title[0].innerText = 'Hello my friends'
    button.innerText = 'Return to the original color'
  }
}
 
function addTodo() {
  let newTodo = document.createElement('li')
  newTodo.innerText = todo[0].value
  list.appendChild(newTodo)
  todo[0].value = ''
}

button.onclick = changeColor
buttonAddTodo.onclick = addTodo
