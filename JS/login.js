

function init() {
    stopPreloader()
}
// makeing new group
async function saveGr() {
    let grName = document.getElementById("new-group-name").value
    let grPasscode = document.getElementById("new-group-passcode").value
    saveGrName(grName)
    saveGrPasscode(grPasscode, grName)
    saveDefaultUser(grName)
    saveDefaultcategories(grName)
    changePageCountdoun("./index.html")
}


function changePageCountdoun(page) {
    setTimeout(function () {
        window.location = page;

    }, 1000)
}


/* DEFAULT DATA IN NEU GRUOP */
async function saveGrName(grName) {
    await database.ref('groups/' + grName).set({
        grName: grName
    })
}
async function saveGrPasscode(grPasscode, grName) {
    await database.ref('groups/' + grName).set({
        passcode: grPasscode
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
            category_name: item,
            id: index
        })
    }
    )

}



// // LOGIN
function login() {
    let groupName = document.getElementById('group-login-name');
    let groupPasscode = document.getElementById('group-login-passcode');
    imputIsEmpty = checkForInput(groupName.value, groupPasscode.value);
    if (!imputIsEmpty) {
        authorization(groupName.value, groupPasscode.value)
    }
}

async function authorization(groupName, groupPasscode) {
    let response = await database.ref('groups/' + groupName)

    response.on('value', function (snapshot) {
        let data = snapshot.val();

        if (data && data.passcode == groupPasscode) {
            saveArrayInLS("currentGroup", groupName)
            gotoLocation("addTask.html")
        }
        else {
            showLoginError();
        }
    })
}
function checkForInput(groupName, groupInput) {
    removeRedOutline('group-login-name')
    removeRedOutline('group-login-passcode')
    let inputIsEmpety = false;
    if (!groupName) {
        makeOutlineRed('group-login-name')
        inputIsEmpety = true;
    }
    if (!groupInput) {
        makeOutlineRed('group-login-passcode')
        inputIsEmpety = true;
    }
    return inputIsEmpety;
}


function demoLogin() {
    saveArrayInLS("currentGroup", "DEMO")
    window.location = "./addTask.html"
}


function showLoginError() {
    let loginError = document.getElementById("login-error")
    loginError.classList.remove("display-none");
}






/* LOCAL STORAGE */
function saveArrayInLS(key, arrayInput) {
    let arrayAsString = JSON.stringify(arrayInput);
    localStorage.setItem(key, arrayAsString)
}





