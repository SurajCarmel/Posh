function nextNav(dest) {
    location.href = dest;
}

var modal = document.getElementById("navigationPage");
var background = document.getElementById("pageParent");

window.onclick = function(event) {
    if (event.target == modal) {
        modal.style.display = "none";
        background.style.position = "absolute";
    }
};

function popupToggle(popupID) {
    var popup = document.getElementById(popupID);
    if (popup.style.display == "none") {
        popup.style.display = "block";
    } else {
        popup.style.display = "none";
    }
}

function navDisplay(navigationColumnID, backgroundID) {
    var navColumn = document.getElementById(navigationColumnID);
    navColumn.style.display = "block";
    background.style.position = "fixed";
}