function hide(id) {
    var doc = document.getElementById(id);
    doc.style.display = "none";
}

function show(full, half) {
    var fullBox = document.getElementsByClassName(full);
    for (let index = 0; index < document.getElementsByClassName(full).length; index++) {
        fullBox[index].style.display = "block";
    }
    console.log(document.getElementsByClassName(half));

    var halfBox = document.getElementsByClassName(half);
    halfBox[0].style.display = "block";
}

function showcharge(charge) {
    var doc = document.getElementById(charge);
    doc.style.display = "block";
}


function certificate() {
    location.href = "posh_screen-2.html";
}

window.onclick = function(event) {
    var cert = document.getElementById("windowExit");
    if (event.target == cert) {
        location.href = "posh_screen-1.html";
    }
}

function nextNav(dest) {
    location.href = dest;
}

function imageclick() {
    var path = document.getElementById("dark")
    if (path.alt == "like") {
        path.src = "../ASSETS/Artboard 1 copy 8@16x.png";
        path.alt = "dislike";
    } else {
        path.src = "../ASSETS/like.png";
        path.alt = "like"
    }
}