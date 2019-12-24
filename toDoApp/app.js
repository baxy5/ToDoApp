// add a new todo function
function addTodo(){
    let item = document.getElementById("input").value;
    let text = document.createTextNode(item);
    let newList = document.createElement("li");
    newList.appendChild(text);
    document.getElementById("toDoList").appendChild(newList);
}

document.getElementById("add-button").addEventListener("keyup", function(enter){
    if(enter.keyCode === 13){
        addTodo();
    }
})

// date
const dateElement = document.getElementById("date");
const options = {
                    weekday: "long",
                    month: 'short',
                    day: "numeric"
                };
const today = new Date();
dateElement.innerHTML = today.toLocaleDateString("en-US", options);
