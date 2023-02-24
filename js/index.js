let inputTask = document.getElementById("inputTask");
let button = document.getElementById("button");
let tasks = document.getElementById("tasks");
let all = document.getElementById("all")
let toDo = document.getElementById("toDo");
let completed = document.getElementById("completed")
let taskContainer = []
let d = new Date()

if (localStorage.getItem('tasks') != null) {
    taskContainer = JSON.parse(localStorage.getItem('tasks'))
    display()
}
checkboxFunc();

function addNewTask() {
    let task = {
        nameOfTask: inputTask.value
    }
    console.log(taskContainer)
    taskContainer.push(task)
    localStorage.setItem("tasks", JSON.stringify(taskContainer))
    let smallcartona = ``
    smallcartona += `<div class=" d-flex justify-content-between bg-light shadow-sm px-2 mb-2 ">
        <div>
        <h6>${task.nameOfTask}</h6> 
        <p class="date">${Date().slice(0, 25)}</p>
       </div>
       <div class="chekbox mt-3"></div>
        </div>`
    tasks.innerHTML = tasks.innerHTML + smallcartona;
    checkboxFunc()
}
function retrieve() {
    inputTask.value = ""
}
function display() {
    let cartona = ``
    for (let i = 0; i < taskContainer.length; i++) {
        cartona += `<div class=" d-flex justify-content-between bg-light shadow-sm px-2 mb-2 ">
        <div>
        <h6>${taskContainer[i].nameOfTask}</h6> 
        <p class="date">${Date().slice(0, 25)}</p>
       </div>
       <div class="chekbox mt-3" id="chekbox"></div>
        </div>`
    }
    tasks.innerHTML = cartona;
}
let chekbox = document.getElementsByClassName("chekbox")
function checkboxFunc() {
    let chekbox = document.getElementsByClassName("chekbox")
    if (chekbox != null || chekbox != undefined) {
        for (let i = 0; i < chekbox.length; i++) {
            chekbox[i].addEventListener("click", function () {
                chekbox[i].style.backgroundColor = "rgb(92, 156, 211)"
                chekbox[i].style.borderRadius = "50%"
                localStorage.setItem("checkbox", JSON.stringify(chekbox))
              

            })
        }

    }
}
function chekboxEmpty(){
    for (let i = 0; i < chekbox.length; i++) {
        chekbox[i].addEventListener("click", function () {
            chekbox[i].style.backgroundColor = "black"
            chekbox[i].style.borderRadius = "0"
            // localStorage.setItem("checkbox",JSON.stringify(chekbox))

        })
    }
}



button.addEventListener('click', function () {
    addNewTask()
})
all.addEventListener("click", function () {
    display()
    checkboxFunc()

})

toDo.addEventListener("click", function () {

})
