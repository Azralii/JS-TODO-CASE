document.getElementById("addNewList").onclick = function(outputName){ 
    var dish = prompt("Enter the Dish Name");
    var li = document.createElement("li");
    li.innerText = dish;
    document.getElementById("outputName").innerText = dish;

}