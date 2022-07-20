console.log("Apload Image .JS")

/* STORAGE */

function init() {
    let imageInput = document.getElementById("image_input")
    let username = document.getElementById("nameBox").value

    const reader = new FileReader();
    reader.addEventListener("load", () => {
        saveImageInDB(reader.result, username)
    })
    reader.readAsDataURL(imageInput.files[0])
}

async function showImage() {
    const response = await getGroupDataFromDB()
    const myUrl = response.images["ameer"].url

    let imageBox = document.getElementById("myImg")
    imageBox.setAttribute("src", myUrl);
}




/* STORAGE END */

async function saveImageInDB(url, username) {

    await database.ref('groups/' + currentGroup + '/images/' + username).set({
        username: username,
        url: url

    })
    console.log("Added")

}