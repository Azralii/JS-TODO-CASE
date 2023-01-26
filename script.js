//Selectors
const inputText = document.querySelector(".txt");
const addButton = document.querySelector(".btn-list");
const list = document.querySelector(".list");
//Event Listeners
addButton.addEventListener("click", addItem);
list.addEventListener("click", editDeleteMark);
//Functions
function addItem(event){
    //Preventing adding empty element to the list
    if(inputText.value != ""){
    //Prevent form from submitting    
    event.preventDefault();
    //Nested Div
    const myDiv = document.createElement("div");
    myDiv.classList.add("nested-div");
    //Creating li element
    const myLi = document.createElement("li");
    myLi.innerText = inputText.value;
    myLi.classList.add("list-item");
    myDiv.appendChild(myLi);
    //Edit Button
    const editButton = document.createElement("button");
    editButton.innerHTML = "Edit";
    editButton.classList.add("edit-btn");
    myDiv.appendChild(editButton);
    //Mark Button
    const markButton = document.createElement("button");
    markButton.innerHTML = "Mark";
    markButton.classList.add("mark-btn");
    myDiv.appendChild(markButton);
    //Delete Button
    const delButton = document.createElement("button");
    delButton.innerHTML = "Delete";
    delButton.classList.add("del-btn");
    myDiv.appendChild(delButton);
    //Append to List
    list.appendChild(myDiv);
    //Clear InputText Value
    }
    inputText.value = "";
}
function editDeleteMark(event){
    const item = event.target;
    const items = event.target.parentElement;
    //Edit the Li Element
    if(item.classList[0] === "edit-btn"){
        items.firstChild.innerText = prompt();
        //inputText.value = items.firstChild.innerText;
        //item.parentElement.remove();
    }            
    //Delete Li Element
    if(item.classList[0] === "del-btn"){
        const del = item.parentElement;
        del.remove();
    }
    //Mark Li Element
    if(item.classList[0] === "mark-btn"){
        const mark = item.parentElement;
        mark.classList.toggle("marked");
    }
}