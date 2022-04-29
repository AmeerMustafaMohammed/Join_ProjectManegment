setURL('http://ameer-mohammed.developerakademie.com/smallest_backend_ever/');

let allGroups = [];
let test;

async function init() {
    await downloadFromServer()

}



function rigisterGroup() {
    let newGroupName = document.getElementById('new-group-input').value;
    allGroups.push(newGroupName);
    saveArrayInLS(allGroups);

}


function login(Demo) {
    let groupInput = document.getElementById('group-input');
    if (!Demo && groupInput.value) {
        console.log("Ist Nicht DEMO")
    } else if (Demo) {
        console.log("Ist DEMO")
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
function saveArrayInLS(arrayInput) {
    let arrayAsString = JSON.stringify(arrayInput);
    localStorage.setItem("allGroups", arrayAsString)
}

function loadArrayFromLS(arrayInput) {
    let arrayAsString = localStorage.getItem(arrayInput)
    let myArray = JSON.parse(arrayAsString)
    return myArray;
}