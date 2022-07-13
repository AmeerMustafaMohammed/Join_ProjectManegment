function init(){
    console.log("Hier ist Trash file JS")
    showGrName()
    showTrash()
   
}


async function showTrash(){
    let response = await getGroupDataFromDB()
     let tasks = Object.values(response.tasks)
    cleanScreen();
    for(let i=0;i<tasks.length;i++){
        let taskStage = tasks[i]["stage"]
        if(taskStage == "trash"){
            showTrashOnScreen(tasks[i])
        }
    }
    
}

function showTrashOnScreen(task){
    let bigContainer = document.getElementById("big-container")
    let newDiv = document.createElement("div")
    newDiv.classList.add("singel-task")
    newDiv.innerHTML="";
    newDiv.innerHTML +=`
        <h3>${task["title"]}<h3>
        <p>${task["date"]}</p>
        <p class="material-symbols-outlined" onclick="restoreTask(${task["id"]})">settings_backup_restore</p>
    `;
    bigContainer.appendChild(newDiv)
}

function restoreTask(id){
    changeStage(id,"todo")
    showTrash()
}

function  cleanScreen(){
    let trashScreen = document.getElementById("big-container")
    trashScreen.innerHTML ="";
}