let addToDoButton = document.getElementById('addToDo');
let toDoContainer = document.getElementById('toDoContainer');
let inputField = document.getElementById('inPutField');
addToDoButton.addEventListener('click', function(){
    let paragraph = document.createElement('p');
    paragraph.classList.add('paragraph-styling');
    paragraph.innerText = inputField.value;
    toDoContainer.appendChild(paragraph);
    inputField.value = "";
    paragraph.addEventListener('click', function() {
        paragraph.style.textDecoration = 'line-through';
    })
    
    paragraph.addEventListener('dblclick', function() {
        console.log('Click');
        toDoContainer.removeChild(paragraph);
    })
})