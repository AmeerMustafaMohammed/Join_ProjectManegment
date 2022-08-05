
function saveInBackend(name, array) {
    backend.setItem(name, array);
}

function loadFromBackend(name) {
    return backend.getItem(name)
}

function deletFromBackend(name) {
    backend.deleteItem(name);
}