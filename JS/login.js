
// makeing new group
async function saveGr() {
    let grName = document.getElementById("new-group-input").value
    console.log(grName)
    await database.ref('groups/' + grName).set({
        grName: grName,

    })
    await database.ref('groups/' + grName + "/users/" + "0").set({
        userId: "0",
        userName: "Anonymous",
        userPhoto: "../img/anonymous.png",
        userEmail: "Anonymous@yahoo.com"

    })
    console.log("Added")
    window.location = "./index.html";

}


function callFromDb(groupInput) {
    let response = database.ref('groups/' + groupInput)

    response.on('value', function (snapshot) {
        let data = snapshot.val();
        if (data) {
            saveArrayInLS("currentGroup", groupInput)
            window.location = "./templates/addTask.html"
        }
        else {
            console.log("No Found")
        }
    })
}


function login(Demo) {
    let groupInput = document.getElementById('group-input');
    if (!Demo && groupInput.value) {
        callFromDb(groupInput.value)
    } else if (Demo) {
        saveArrayInLS("currentGroup", "DEMO")
        window.location = "./templates/addTask.html"

    } else {
        makeOutlineRed('group-input')
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
function saveArrayInLS(key, arrayInput) {
    let arrayAsString = JSON.stringify(arrayInput);
    localStorage.setItem(key, arrayAsString)
}




