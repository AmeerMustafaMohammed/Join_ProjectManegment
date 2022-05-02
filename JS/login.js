setURL('http://ameer-mohammed.developerakademie.com/smallest_backend_ever/');

let allGroups = [];
let test;

async function init() {
    await downloadFromServer()

    if(loadFromBackend("allGroups")){
        allGroups = loadFromBackend("allGroups");
    }
   

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



/* BACKEND STORAGE */


function saveInBackend(name, array) {
    backend.setItem(name, array);
}

function loadFromBackend(name) {
    return backend.getItem(name)
}

function deletFromBackend(name) {
    backend.deleteItem(name);
}
/* LOCAL STORAGE */
function saveArrayInLS(key,arrayInput) {
    let arrayAsString = JSON.stringify(arrayInput);
    localStorage.setItem(key, arrayAsString)
}

function loadArrayFromLS(arrayInput) {
    let arrayAsString = localStorage.getItem(arrayInput)
    let myArray = JSON.parse(arrayAsString)
    return myArray;
}