console.log("Added Task page JS")

function saveTaskInDB(){
let title = document.getElementById("title").value
let date = document.getElementById("date").value
let category = document.getElementById("category").value
let urgency = document.getElementById("urgency").value
let description = document.getElementById("description").value
let asigento = document.getElementById("asigento").value
console.log(title)
console.log(date)
console.log(category)
console.log(urgency)
console.log(description)
console.log(asigento)

database.ref('users/' + 'testTask/').set({
    title: title,
    date: date,
    category: category,
    urgency: urgency,
    description: description,
    asigento: asigento

})
console.log("Added")
}