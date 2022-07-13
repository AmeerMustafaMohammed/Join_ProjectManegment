


function hideDiv(id) {
    let divId = document.getElementById(id)
    divId.classList.add('display-none')
    
}

function showDiv(id) {
    let divId = document.getElementById(id)
    divId.classList.remove('display-none')
}

function makeOutlineRed(id){
   let targetedId =  document.getElementById(id)
   targetedId.classList.add("red-outline")
}

function  removeRedOutline(id){
    let targetedId =  document.getElementById(id)
    targetedId.classList.remove("red-outline")
}


// showing current gruop name on the Navigation
let currentGroup = loadArrayFromLS('currentGroup');
function showGrName(){
    document.getElementById("gr-name").innerHTML = `angemeldet as ${currentGroup}` 
}



function changeStage(dragged,targetedContainer){
    database.ref('groups/' + currentGroup +'/tasks/' +  dragged ).update({
        stage:targetedContainer,
    })
 }