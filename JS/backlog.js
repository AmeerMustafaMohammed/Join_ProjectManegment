showGrName()
callDataFromDB()

async function callDataFromDB(){
    let response = database.ref('groups/' + currentGroup + '/tasks')
   
   await response.on('value', function(snapshot){
        let data = snapshot.val();
        if(data){
          console.log(Object.values(data))
          showOnScreen(Object.values(data))
        }
        else{
            console.log("No Found")
        }
    })
   

}


function showOnScreen(data){
   
    let backlogTasks = document.getElementById("backlog-tasks")
   
    for(let i=(data.length -1);i>=0;i--){
        let newDiv = document.createElement("div")
        newDiv.classList.add('backlog-content')
        newDiv.innerHTML = genarateBacklogHtml(data[i]["category"],data[i]["description"])
        backlogTasks.appendChild(newDiv)
    }
}


function genarateBacklogHtml(category,description){
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
            <button>PIN</button>
            <button>EDIT</button>
        </div>
        

    `;
  
return htmlText

}

