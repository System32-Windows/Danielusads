var currentad = -1
var user = -1
var ads = {
    0: ["miejsce.png", "Miejsce na reklamę", "https://system32-windows.github.io/danielusads"],
}

var users = {
    0: ["test@test.test", "test", 0]
}

function send() {
    for (let i = 0; i < 2; i++) {
        if (document.getElementById("email").value === users[i][0]) {
            if (document.getElementById("pass").value === users[i][1]) {
                user = i;
            } else {
                document.getElementById("warn").innerHTML = "Nieprawidłowe hasło";
            }
        } else {
            document.getElementById("warn").innerHTML = "Nieprawidłowy email";
        }
    }

}

function adload() {
    currentad = Math.floor(Math.random() * 1)
    document.getElementById("href").href = ads[currentad][2]
    document.getElementById("ad").src = `danieluscdn/${ads[currentad][0]}`
}

function statload() {

}