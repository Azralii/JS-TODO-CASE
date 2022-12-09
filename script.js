const inputText = document.getElementById("txt"),
              items = document.querySelectorAll("#list li");
        var tab = [], index;
         // get the selected li index using array
         //populate array with li values

        for(var  i=0; i<items.length; i++){
            tab.push(items[i].innerHTML);
             }

        //get li index onclick     
            for(var i=0; i<items.length; i++){
            items[i].onclick = function(){
                index = tab.indexOf(this.innerHTML);
                console.log(this.innerHTML + "Index = " + index);
                inputText.value = this.innerHTML;
            };
        }
        function addItem(){
            const listNode = document.getElementById("list");
            const idItem = document.getElementById("item");
            const textNode = document.createTextNode(inputText.value);
            const liNode = document.createElement("li");
            liNode.appendChild(textNode);
            listNode.appendChild(liNode);
            const markButton = document.createElement("button"),
            delButton = document.createElement("button");
            markButton.innerHTML = "Mark";
            delButton.innerHTML = "Delete";
            listNode.appendChild(markButton);
            listNode.appendChild(delButton);
            document.getElementById("list").appendChild(liNode);
            delButton.addEventListener("click",()=>{
            removeItem();
        });
            markButton.addEventListener("click",()=>{
            markItem();
        });
                 }
        function removeItem() { 
            
                items[index].parentNode.removeChild(items[index]);
        
        }
        function markItem(){
            
            
               
                for(var i=0; i<items.length; i++){
                    items[i].parentElement.style.backgroundColor = "blue";
        }
    }
        function editItem(){
            items[index].innerHTML = inputText.value;
        }
