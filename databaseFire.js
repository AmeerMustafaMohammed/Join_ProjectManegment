console.log("databse")


const firebaseConfig = {
    apiKey: "AIzaSyDve2_8KFP6k5fAqaAqVWsi2ank1mGlAyM",
    authDomain: "joinapp-75543.firebaseapp.com",
    databaseURL: "https://joinapp-75543-default-rtdb.europe-west1.firebasedatabase.app",
    projectId: "joinapp-75543",
    storageBucket: "joinapp-75543.appspot.com",
    messagingSenderId: "928187275554",
    appId: "1:928187275554:web:f84acea8ef954187de6d7b"
  };

  firebase.initializeApp(firebaseConfig)
let database = firebase.database();

function saveGr(){
    let grName = document.getElementById("new-group-input").value
    console.log(grName)
    database.ref('users/' + grName).set({
        name: grName
    
    })
    console.log("Added")
}


/* LOCAL STORAGE */
function saveArrayInLS(key,arrayInput) {
    let arrayAsString = JSON.stringify(arrayInput);
    localStorage.setItem(key, arrayAsString)
}




