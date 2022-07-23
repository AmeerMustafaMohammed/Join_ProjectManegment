
// makeing new group
async function saveGr() {
    let grName = document.getElementById("new-group-input").value
    saveGrName(grName)
    saveDefaultUser(grName)
    saveDefaultcategories(grName)
    window.location = "./index.html";

}

/* DEFAULT DATA IN NEU GRUOP */
async function saveGrName(grName) {
    await database.ref('groups/' + grName).set({
        grName: grName
    })
}

async function saveDefaultUser(grName) {
    console.log("SaveUser")
    await database.ref('groups/' + grName + "/users/" + "0").set({
        userId: "0",
        userName: "Anonymous",
        userPhoto: "../img/anonymous.png",
        userEmail: "Anonymous@yahoo.com"

    })
}


async function saveDefaultcategories(grName) {
    let categories = ["shopping", "cleaning", "reparing"]
    categories.forEach(async (item, index, arr) => {
        await database.ref('groups/' + grName + "/category/" + index).set({
            category_name: item
        })
    }
    )

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




