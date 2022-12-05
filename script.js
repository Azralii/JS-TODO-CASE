const inputText = document.querySelector("#txt");
const myButton = document.querySelector(".btn-list");
const list = document.querySelector(".container ul");
myButton.addEventListener("click",(e)=>{  
    if(inputText.value != ""){

    e.preventDefault();
    // skapa list
    const myLi = document.createElement("li");
    myLi.className = "checked";
    myLi.innerHTML = inputText.value;
    list.appendChild(myLi);
    //skapa span
    const mySpan = document.createElement("span");
    mySpan.innerHTML = "X";
    myLi.appendChild(mySpan);
}
    const close = document.querySelectorAll("span");
    for(let i=0;i<close.length;i++){
        close[i].addEventListener("click", ()=>{
            close[i].parentElement.style.display = "none";
        })
    }
    const mark = document.querySelectorAll("li");
    for(let i=0;i<mark.length;i++){
        mark[i].addEventListener("click",() =>{
            mark[i].parentElement.style.color = "green";
            mark[i].parentElement.style.borderColor = "white";
            mark[i].parentElement.style.borderStyle = "solid";
            mark[i].parentElement.style.borderWidth = "0 2px 2px 0";
        })
    }
    inputText.value = "";
});
