var currentad = undefined
var ads = {
    0: ["miejsce.png", "Miejsce na reklamę", "https://system32-windows.github.io/danielusads"],
}

var users = {
    0: ["test", 0]
}

function submit() {

}

function adload() {
    currentad = Math.floor(Math.random() * 1)
    document.getElementById("href").href = ads[currentad][2]
    document.getElementById("ad").src = `danieluscdn/${ads[currentad][0]}`
}

function statload() {

}