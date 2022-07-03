console.log("Backlog")
let currentGroup = loadArrayFromLS('currentGroup');

showGrouponScreen()

function showGrouponScreen(){
    document.getElementById("gr-name").innerHTML = `angemeldet as ${currentGroup}` 
}
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
   
    let backlogContainer = document.getElementById("backlog-container")
   
    for(let i=0;i<data.length;i++){
        console.log(i)
        let newDiv = document.createElement("div")
        newDiv.classList.add('backlog-content')
        newDiv.innerHTML =`
        
            <div class="user-info">
                <div class="user-photo">
                    Photo
                </div>
                <div class="user-name-email">
                <p id="user-name">Ameer</p>
                <p id="user-email" >ameer@web.de</p>
                </div>
            </div>
            <div class="category">
                <p>${data[i]["category"]}</p>
            </div>
            <div class="ditails">
                <p>${data[i]["description"]}</p>
            </div>

    
        `;
        
        backlogContainer.appendChild(newDiv)
    }
}