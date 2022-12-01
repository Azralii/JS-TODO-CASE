const inputField = document.querySelector("input-task");
const form = document.querySelector("form");
const searchInput = document.querySelector("filter");
const task = document.querySelector("tasks");
const removeAllBtn = document.querySelector("clear-tasks");
const msgBox = document.querySelector("msg");


form.addEventListener("submit", addTask)

function addTask(e){
    console.log(inputField.value)
    e.preventDfault();
}

