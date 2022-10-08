const workFormMainTable = document.querySelector(".work_form__main_table_contents");
const workMainForm = document.querySelector(".work_form__main_subjet form");
const workFormInput = document.querySelector(".work_form__main_subjet form input");

let toDos = [];


function saveToDos(){
    localStorage.setItem("todos",JSON.stringify(toDos))
}

function deleteTodo (event){
    
    const li = event.target.parentElement;
    li.remove();
    toDos = toDos.filter(toDo => toDo.id !== parseInt(li.id))
    saveToDos();
}


function paintToDo(newTodo){
    const li = document.createElement("li");
    li.id = newTodo.id;
    const span = document.createElement("span");
    const button = document.createElement("button");
    button.classList = "fa-solid fa-trash";
    
    button.addEventListener("click",deleteTodo);
    span.innerText = newTodo.text;
    
    
   
    li.appendChild(span);
    li.appendChild(button);
    
    workFormMainTable.appendChild(li);
    
}

function  handleToDoSubmit (event){
    event.preventDefault();
    const newTodo = workFormInput.value;
    workFormInput.value = "";
    const newTodoObj = {
        text:newTodo,
        id:Date.now(),
    }
    toDos.push(newTodoObj);
    paintToDo(newTodoObj);
    saveToDos();
}

workMainForm.addEventListener("submit",handleToDoSubmit);

const savedToDos = localStorage.getItem("todos");


if(savedToDos){
    const parsedToDos = JSON.parse(savedToDos);
    toDos =parsedToDos;
    parsedToDos.forEach(paintToDo);
    } ;


