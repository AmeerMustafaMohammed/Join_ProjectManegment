
console.log("LoginPage")

let allTasks =[];



 function init() {
    setTimeout(function(){
        allTasks = loadArrayFromLS("tasks")
        console.log(allTasks)
    },1000)
    
}



function rigisterGroup() {
    console.log("I am here")
    let newGroupName = document.getElementById('new-group-input').value;
    allGroups.push(newGroupName);
    saveInBackend("allGroups",allGroups)
    saveArrayInLS("currentGroup",newGroupName)
    window.location = "/templates/addTask.html"
}


function login(Demo) {
    let groupInput = document.getElementById('group-input');
    if (!Demo && groupInput.value) {
        for(let i =0; i<allGroups.length;i++){
            if(groupInput.value == allGroups[i]){
                window.location = "/templates/addTask.html"
                saveArrayInLS("currentGroup",groupInput.value)
            }
        }
    } else if (Demo) {
        window.location = "/templates/addTask.html"
        saveArrayInLS("currentGroup","DEMO")
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




function loadArrayFromLS(arrayInput) {
    let arrayAsString = localStorage.getItem(arrayInput)
    let myArray = JSON.parse(arrayAsString)
    return myArray;
}




