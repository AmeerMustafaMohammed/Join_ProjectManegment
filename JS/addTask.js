console.log("Added Task page JS")

let currentGroup = loadArrayFromLS('currentGroup');
console.log(currentGroup)
showGrouponScreen()
function saveTaskInDB(){
let title = document.getElementById("title").value
let date = document.getElementById("date").value
let category = document.getElementById("category").value
let urgency = document.getElementById("urgency").value
let description = document.getElementById("description").value
let asigento = document.getElementById("asigento").value


database.ref('groups/' + currentGroup +'/tasks/' +  title).set({
    title: title,
    date: date,
    category: category,
    urgency: urgency,
    description: description,
    asigento: asigento

})
console.log("Added")
}


function showGrouponScreen(){
    document.getElementById("gr-name").innerHTML = `angemeldet as ${currentGroup}` 
}







/* 

console.log(title)
console.log(date)
console.log(category)
console.log(urgency)
console.log(description)
console.log(asigento)

*/