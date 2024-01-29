let addToDoButton = document.getElementById('addToDo');
let toDoContainer = document.getElementById('toDoContainer');
let inputField = document.getElementById('inputField');

addToDoButton.addEventListener('click', function(){
    var paragraph = document.createElement('p');
    paragraph.innerHTML = inputField.value;
    toDoContainer.appendChild(paragraph);
    // i shton div-it ni paragraf

    inputField.value = "";
    // pjesa ku shohet kontenti per to do listen

    paragraph.addEventListener('click', function(){
        paragraph.style.textDecoration = "line-through";
        // vi ne tekst
    })
    paragraph.addEventListener('dblclick', function(){
        toDoContainer.removeChild(paragraph);
    })
    // dbclick -> double click
})