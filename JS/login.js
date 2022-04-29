// Register a new Group
let allGroups = []

setURL('http://ameer-mohammed.developerakademie.com/smallest_backend_ever');
let users = [];
async function testBackend(){
    await downloadFromServer();
   // users = JSON.parse(backend.getItem('users')) || [];
   // backend.setItem('test' , 'hallo');
    
}
testBackend()

if (loadArrayFromLS('allGroups')) {
    allGroups = loadArrayFromLS('allGroups');
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

function saveArrayInLS(arrayInput) {
    let arrayAsString = JSON.stringify(arrayInput);
    localStorage.setItem("allGroups", arrayAsString)
}

function loadArrayFromLS(arrayInput) {
    let arrayAsString = localStorage.getItem(arrayInput)
    let myArray = JSON.parse(arrayAsString)
    return myArray;
}