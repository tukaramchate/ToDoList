
let counter = 0
let taskList = []

retLocalS();
showData();

function submitTask(taskI){

    document.getElementById('task').innerHTML += `<div class="taskBox" id="task${counter}"><p> ${taskI} </p> <i id=${counter} onclick="deleteElement(event)" class="fa-solid fa-trash"></i> </div>`

    counter++;

    document.getElementById('inpT').value = ""

    saveLocalS(counter, taskI)
}

function deleteElement(e){
    console.log(e.srcElement.id);

    document.getElementById(`task${e.srcElement.id}`).remove();
}

function retLocalS(){
    counter = Number(localStorage.getItem('counter')) || 0;
    taskList = JSON.parse(localStorage.getItem('taskList')) || [];
}

function saveLocalS(counter, taskI){

    let newTask = {
        "counter" : counter,
        "task" : taskI
    }

    taskList.push(newTask)

    localStorage.setItem('taskList', JSON.stringify(taskList))
    
    localStorage.setItem('counter', counter)


}

function showData(){

    let taskL = JSON.parse(localStorage.getItem('taskList'))
    let counter = Number(localStorage.getItem('counter'))

    console.log(taskL);
    for(let i = 0; i<counter; i++ ){
        
        console.log(taskL);
        document.getElementById('task').innerHTML += `<div class="taskBox" id="task${counter}"><p> ${taskL[i].task} </p> <i id=${counter} onclick="deleteElement(event)" class="fa-solid fa-trash"></i> </div>`

    }

}
