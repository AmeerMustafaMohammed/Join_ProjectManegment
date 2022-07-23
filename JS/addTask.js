
function init() {
    showGrName()
    showCategoris()
    showUsers()
}

/* **************************************  SHOWING ON FORM */
// showing categorys in form

async function showCategoris() {
    try {
        let response = await getGroupDataFromDB()
        let categories = Object.values(response.category)
        let categorySelect = document.getElementById("category")
        categorySelect.innerHTML = ""
        for (let i = (categories.length - 1); i >= 0; i--) {
            categorySelect.innerHTML += `
            <option value="${categories[i]["category_name"]}">${categories[i]["category_name"]}</option>
            `;
        }
    } catch (error) {
        console.log(error)
    }
}

// showing USERS in form
async function showUsers() {
    try {
        let response = await getGroupDataFromDB()
        let users = Object.values(response.users)
        let userSelection = document.getElementById("asigento")
        userSelection.innerHTML = ""
        for (let i = (users.length - 1); i >= 0; i--) {
            userSelection.innerHTML += `
            <option value="${users[i]["userId"]}">${users[i]["userName"]}</option>
            `;
        }
        showUserImage()
    } catch (error) {
        console.log(error)
    }
}



// showing USER_IMAGE in form
async function showUserImage() {
    let id = document.getElementById("asigento").value
    let userImagecontainer = document.getElementById("assigend-user")
    userImagecontainer.innerHTML = ""
    let response = await getGroupDataFromDB()
    let userImageUrl = response.users[id]["userPhoto"]
    let newImg = document.createElement('img')
    newImg.src = `${userImageUrl}`;
    userImagecontainer.appendChild(newImg)

}

/* **************************************  ADDING TO DB */

// adding neu Task to the Database
function saveTaskInDB() {
    let allAtributs = getTaskAttributs()
    let randomId = idGenerator()
    if (allAtributs) {
        database.ref('groups/' + currentGroup + '/tasks/' + randomId).set({
            id: randomId,
            title: allAtributs.title,
            date: allAtributs.date,
            category: allAtributs.category,
            urgency: allAtributs.urgency,
            description: allAtributs.description,
            asigento: allAtributs.asigento,
            stage: "backlog"

        })
        console.log("Added")
    }
}



function getTaskAttributs() {
    let myDivs = ["title", "date", "category", "asigento", "urgency", "description"]
    let allAtributs = {}
    let i = 0;
    while (i < myDivs.length) {
        let value = getDivbyId(myDivs[i]);
        console.log(value)
        if (value) {
            removeRedOutline(myDivs[i])
            allAtributs[myDivs[i]] = value;
            i++
        }
        else {
            makeOutlineRed(myDivs[i])
            allAtributs = false;
            break;
        }
    }
    return allAtributs;
}

function getDivbyId(id) {
    if (id == "urgency") {
        return document.querySelector(`input[name="${id}"]:checked`).value;
    }
    return document.getElementById(id).value
}



// adding neu User to the Database
async function addUser() {
    let userName = document.getElementById("user-name");
    let randomId = idGenerator();
    if (userName.value) {
        database.ref('groups/' + currentGroup + '/users/' + randomId).set({
            userId: randomId,
            userName: userName.value,
            userEmail: 'ex@web.de',
            userPhoto: await uploadUserPhoto()
        })
        showUsers()
        hideDiv("add-user-overlay")
    }
    else {
        makeOutlineRed("user-name")
    }
}

function cleanUserOverlay() {
    removeRedOutline("user-name")
    let addUserLable = document.getElementById("user_image_lable")
    let usernameInput = document.getElementById("user-name")

    addUserLable.style.backgroundImage = "";
    usernameInput.value = "";
}
/* ADDING USER PHOTO */

async function uploadUserPhoto() {
    let imageInput = document.getElementById("user_image_input")
    if (imageInput.value) {

        return new Promise((res, rej) => {
            const reader = new FileReader();
            reader.addEventListener("load", () => {
                if (reader.result) {
                    res(reader.result)
                }

            })
            reader.readAsDataURL(imageInput.files[0])

        })
    }
    else {
        return "NoPhoto"
    }

}



function previewUserimage() {

    let imageInput = document.getElementById("user_image_input")
    let userimageLable = document.getElementById("user_image_lable")
    let reader = new FileReader()
    reader.onloadend = function () {
        userimageLable.style.backgroundImage = `url(${reader.result})`
        userimageLable.classList.add("image-preview-style")
    }
    reader.readAsDataURL(imageInput.files[0])
}

// adding neu Category to the Database
function addCategory() {
    let neuCategory = document.getElementById("new-catrgory");
    if (neuCategory.value) {
        database.ref('groups/' + currentGroup + '/category/' + idGenerator()).set({
            category_name: neuCategory.value
        })
        console.log("Neu Category Added")
        showCategoris()
        hideDiv("add-category-overlay")
    }
    else {
        makeOutlineRed("new-catrgory")
    }
}


function cleanCategoryOverlay() {
    removeRedOutline("new-catrgory")
    let categoryInput = document.getElementById("new-catrgory")
    categoryInput.value = "";
}

/* **************************************  USIFUL FUNCTIONS*/

/* ID Genaroter */
function idGenerator() {
    let newId = Math.floor(Math.random() * 10) + Date.now();
    return newId;
}



/* SHOW AND HIDE OVERLAYS */
document.getElementById("add-user-overlay").addEventListener('click', e => {
    if (e.target.getAttribute('name') == 'overlay-background') {
        hideDiv("add-user-overlay")
    }

})
document.getElementById("add-category-overlay").addEventListener('click', e => {
    if (e.target.getAttribute('name') == 'overlay-background') {
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