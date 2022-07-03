
// makeing new group
async function saveGr(){
    let grName = document.getElementById("new-group-input").value
    console.log(grName)
    await database.ref('groups/' + grName).set({
        name: grName
    
    })
    console.log("Added")
    window.location.href = "/";

}


function callFromDb(groupInput){
    let response = database.ref('groups/' + groupInput)
   
    response.on('value', function(snapshot){
        let data = snapshot.val();
        if(data){
            saveArrayInLS("currentGroup",groupInput)
            window.location = "/templates/addTask.html"
        }
        else{
            console.log("No Found")
        }
    })
}


function login(Demo) {
    let groupInput = document.getElementById('group-input');
    if (!Demo && groupInput.value) {
        callFromDb(groupInput.value)   
    } else if (Demo) {
        saveArrayInLS("currentGroup","DEMO")
        window.location = "/templates/addTask.html"
       
    } else {
        groupInput.classList.add("red-outline")
    }
}



function hideDiv(id) {
    let divId = document.querySelector(id)
    divId.style.display = "none"
}

function showDiv(id) {
    let divId = document.querySelector(id);
    divId.style.display = "flex"
}





/* LOCAL STORAGE */
function saveArrayInLS(key,arrayInput) {
    let arrayAsString = JSON.stringify(arrayInput);
    localStorage.setItem(key, arrayAsString)
}




