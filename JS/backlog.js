
function init(){
    showGrName()
    cleanBacklog()
    showTasksOnScreen()

}

function cleanBacklog(){
    let backlogTasks = document.getElementById("backlog-tasks")
    backlogTasks.innerHTML =""
}
async function showTasksOnScreen() {
    //TODO CLEANING
    let response = await getGroupDataFromDB()
    let tasks = Object.values(response.tasks)
    for (let i = (tasks.length - 1); i >= 0; i--) {
        if (tasks[i]["stage"] == "backlog") {
            let htmlText = document.createElement("div")
            htmlText.textContent = genarateAssigentoHtml(tasks[i]["asigento"], response)
            htmlText.textContent += genarateBacklogHtml(tasks[i]["category"], tasks[i]["description"], tasks[i]["id"])
            appendToBacklog(htmlText.innerText)
        }

    }
}
function appendToBacklog(htmlTaxt) {

    let backlogTasks = document.getElementById("backlog-tasks")
    let myDiv = document.createElement("div")
    myDiv.innerHTML = `${htmlTaxt}`
    myDiv.classList.add('backlog-content')
    backlogTasks.append(myDiv)
}

function genarateAssigentoHtml(userId, response) {
    let userName = response.users[userId]["userName"]
    let userEmail = response.users[userId]["userEmail"]
    let userPhoto = response.users[userId]["userPhoto"]
    let htmlText = `            
    <div class="backlog-row-firs-child">
    <!--First box  -->
    <div class="user-info customBox">
        <img id="userImage" src="${userPhoto}" alt="myfoto">
        <div class="user-name-email">
            <p id="user-name">${userName}</p>
            <p id="user-email">${userEmail}</p>
        </div>
    </div>
  
    
`;

    return htmlText
}

function genarateBacklogHtml(category, description, id) {
    let htmlText = `   
                <!--second  box  -->

                <div class="category customBox">
                    <p>${category}</p>
                </div>
                <!--third  box  -->

                <div class="ditails customBox">
                    <p>${description}</p>
                </div>
            </div>
            <div class="buttons backlog-row-second-child">
                <button onclick="pinTask(${id})">PIN</button>
                <button onclick="editTask(${id})">EDIT</button>
            </div>
    `;

    return htmlText

}




function editTask(id) {
    //TODo
    console.log("editTask")

}


function pinTask(id) {
    changeStage(id, "todo")
    init()
}