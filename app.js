var list = document.getElementById("list")
function additem(){
    var todo = document.getElementById("todo")

    // //make li
    var li = document.createElement("li")
    var litext = document.createTextNode(todo.value)
    li.appendChild(litext)
    list.appendChild(li)
    li.setAttribute("class","edit")

    // //delete btn
    var delBtn = document.createElement("button")
    var delText = document.createTextNode("DELETE")
    delBtn.setAttribute("class","btn")
    delBtn.setAttribute("onclick","delItem(this)")
    delBtn.appendChild(delText)
    li.appendChild(delBtn)

    // // Edit btn
    var editBtn = document.createElement("button")
    var editText = document.createTextNode("Edit")
    editBtn.appendChild(editText)
    li.appendChild(editBtn)
    editBtn.setAttribute("class","btn")
    editBtn.setAttribute("onclick","editItem(this)")
    
    
    
    todo.value = ""
    
}


function delItem(e){
    e.parentNode.remove()
}

function delAll(){
    list.innerHTML=""
}

function editItem(e){
    var n = e.parentNode.firstChild.nodeValue;
    var val = prompt("Enter updated task", n);
    e.parentNode.firstChild.nodeValue = val
}