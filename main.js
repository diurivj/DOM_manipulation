let button = document.getElementById('change-color')
let title = document.getElementsByTagName('h1')

let buttonAddTodo = document.getElementById('addTodo')
let todo = document.getElementsByName('todo')
let list = document.getElementById('list')

let inputURL = document.getElementsByName('url')
let buttonURL = document.getElementById('addLink')
let websites = document.getElementById('content')

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


function addULRToWebsite() {
  let url_link = inputURL[0].value
  let anchor = document.createElement('a')
  anchor.href = 'https://' + url_link
  anchor.target = '_blank'
  anchor.innerHTML = '<span>😏 Go to the page</span>'
  websites.appendChild(anchor)
  inputURL[0].value = ''
  console.log(inputURL)
}

list.addEventListener('click', e => {
  list.removeChild(e.target)
})

button.onclick = changeColor
buttonAddTodo.onclick = addTodo
buttonURL.onclick = addULRToWebsite
