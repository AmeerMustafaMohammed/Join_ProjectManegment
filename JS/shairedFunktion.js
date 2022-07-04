
function hideDiv(id) {
    let divId = document.getElementById(id)
    divId.classList.add('display-none')
    
}

function showDiv(id) {
    let divId = document.getElementById(id)
    divId.classList.remove('display-none')
}