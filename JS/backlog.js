showGrName()
showOnScreen()

async function showOnScreen(){
   
    let backlogTasks = document.getElementById("backlog-tasks")
    backlogTasks.innerHTML =""
    let response = await getGroupDataFromDB()
    let data = Object.values(response.tasks)
    for(let i=(data.length -1);i>=0;i--){
        if(data[i]["stage"] == "backlog"){
            let newDiv = document.createElement("div")
            newDiv.classList.add('backlog-content')
            newDiv.innerHTML = genarateBacklogHtml(data[i]["category"],data[i]["description"],data[i]["id"])
            backlogTasks.appendChild(newDiv)
        }
      
    }
}


function genarateBacklogHtml(category,description,id){
    
    let htmlText = `            
        <div class="backlog-row-firs-child" >
        <div class="user-info customBox">
            <div class="user-photo">    Photo  </div>
        <div class="user-name-email">
        <p id="user-name">Ameer</p>
        <p id="user-email" >ameer@web.de</p>
        </div>
        </div>
        <div class="category customBox">  <p>${category}</p> </div>
        <div class="ditails customBox"> <p>${description}</p>  </div>

        </div>
        <div class="buttons">
            <button onclick="pinTask(${id})">PIN</button>
            <button onclick="editTask(${id})">EDIT</button>
        </div>
        

    `;
  
return htmlText

}

function editTask(id){
   
    console.log("editTask")
    
}


function pinTask(id){
    changeStage(id,"todo")
    showOnScreen()
}