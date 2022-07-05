

let currentGroup = loadArrayFromLS('currentGroup');
console.log(currentGroup)
showGrName()

// showing current gruop name on the Navigation
function showGrName(){
    document.getElementById("gr-name").innerHTML = `angemeldet as ${currentGroup}` 
}


// adding neu Task to the Database

function getTaskAttributs(){
    let myDivs = ["title","date","description","category","urgency","asigento"]
    let allAtributs = {}
    let i=0;
    while(i<myDivs.length ){
        let value = getDivbyId(myDivs[i]);
        if(value){
         removeRedOutline(myDivs[i])
         allAtributs[myDivs[i]]= value;
         i++
        }
        else{
         makeOutlineRed(myDivs[i])
         allAtributs = false;
         break;
        }
    }
    return allAtributs;
}

function getDivbyId(id){
 return document.getElementById(id).value
}

// adding neu Task to the Database
function saveTaskInDB(){
let allAtributs =   getTaskAttributs()
if(allAtributs){
    database.ref('groups/' + currentGroup +'/tasks/' +  idGenerator()).set({
        title: allAtributs.title,
        date: allAtributs.date,
        category: allAtributs.category,
        urgency: allAtributs.urgency,
        description: allAtributs.description,
        asigento: allAtributs.asigento
    
    })
    console.log("Added")
}
}



// adding neu USer to the Database
 async function addUser(){
    let userName = document.getElementById("user-name");
    if(userName.value){        
    database.ref('groups/' + currentGroup +'/users/' +  idGenerator() ).set({
        userName:userName.value,
        useremail:'ex@web.de'
    })
            console.log("Neu user Added")
    }  
    else{
        makeOutlineRed(userName)
    }
}

// adding neu Category to the Database
 function addCategory(){
    let neuCategory = document.getElementById("new-catrgory");
    if(neuCategory.value){
    database.ref('groups/' + currentGroup +'/category/' +  idGenerator() ).set({
        category_name:neuCategory.value
    })
    console.log("Neu Category Added")
    }  
    else{
        makeOutlineRed(neuCategory)
    }
 }

/* ID Genaroter */
function idGenerator(){
    let newId = Math.floor(Math.random() * 10) + Date.now() ; 
    return newId;
}



/* SHOW AND HIDE OVERLAYS */
document.getElementById("add-user-overlay").addEventListener('click', e => {
    if(e.target.getAttribute('name') == 'overlay-background'){
        hideDiv("add-user-overlay")
    }
 
})
document.getElementById("add-category-overlay").addEventListener('click', e => {
    if(e.target.getAttribute('name') == 'overlay-background'){
        hideDiv("add-category-overlay")
    }
 
})




/* 

console.log(title)
console.log(date)
console.log(category)
console.log(urgency)
console.log(description)
console.log(asigento)

*/