
function getGroupDataFromDB(){
    return new Promise((res,rej) => {
        try {
            let response = database.ref('groups/' + currentGroup )
   
             response.on('value', function(snapshot){
                 let data = snapshot.val();  
                  let lastData =   Object.values(data)        
                   res(data)        
             })
            }
        catch(error){
            rej(error)
        }
    })
}



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