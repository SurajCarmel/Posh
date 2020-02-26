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
    var show = document.getElementById(charge);
    show.style.display = "block";
}


window.onclick = function(event) {
    var cert = document.getElementById("exit");
    var hide = document.getElementById("charge");
    if (event.target == cert) {
        alert('done')
        document.getElementById("certificate").style.display = "none";
    }
    if (event.target == hide) {
        location.href = "posh_screen-22.html";
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

function chargeClick(charge) {
    var chargePop = document.getElementById(charge);
    if (chargePop.style.display === "none") {
        chargePop.style.display = "block"
    } else {
        chargePop.style.display = "none"
    }

}

// ========================== coursel slide show ==============================

var slideIndex = 1;
var myTimer;
var slideshowContainer;

window.addEventListener("load", function() {
    showSlides(slideIndex);
    myTimer = setInterval(function() { plusSlides(1); }, 4000);

    slideshowContainer = document.getElementsByClassName("slideshow-inner")[0];

    slideshowContainer.addEventListener('mouseenter', pause);
    slideshowContainer.addEventListener('mouseleave', resume);

});

function plusSlides(n) {
    clearInterval(myTimer);
    if (n < 0) {
        showSlides(slideIndex -= 1);
    } else {
        showSlides(slideIndex += 1);
    }


    if (n === -1) {
        myTimer = setInterval(function() { plusSlides(n + 2); }, 4000);
    } else {
        myTimer = setInterval(function() { plusSlides(n + 1); }, 4000);
    }
}

function currentSlide(n) {
    clearInterval(myTimer);
    myTimer = setInterval(function() { plusSlides(n + 1); }, 4000);
    showSlides(slideIndex = n);
}

function showSlides(n) {
    var i;
    var slides = document.getElementsByClassName("myslides");
    var dots = document.getElementsByClassName("dot");
    if (n > slides.length) { slideIndex = 1; }
    if (n < 1) { slideIndex = slides.length; }
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }

    for (let i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace("active", "");
    }
    slides[slideIndex - 1].style.display = "block";
    dots[slideIndex - 1].className += " active";

}

pause = () => {
    clearInterval(myTimer);
};

resume = () => {
    clearInterval(myTimer);
    myTimer = setInterval(function() { plusSlides(slideIndex); }, 4000)
}

function putcontent(index) {
    var show = document.getElementById(index);
    console.log(show)
    show.style.display = "block";

    var putname = document.getElementById('putname');
    var putemail = document.getElementById('putemail');
    var putcell = document.getElementById('putcell')

    putname.nodeValue = name.innerHTML;
    putemail.nodeValue = email.innerHTML;
    putcell.nodeValue = cell.innerHTML;

}

function edite(index, x, y, z) {

    var name = document.getElementById(x);
    var email = document.getElementById(y);
    var cell = document.getElementById(z)

    var show = document.getElementById(index);
    show.style.display = "block";

    var putname = document.getElementById('putname').value = name.innerHTML;
    var putemail = document.getElementById('putemail');
    var putcell = document.getElementById('putcell')

    putname.value = name.innerHTML;
    putemail.value = email.innerHTML;
    putcell.value = cell.innerHTML;
}