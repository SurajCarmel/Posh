// document.getElementById("hover").addEventListener('mouseover', function() {
//     var chargePop = document.getElementById('pop');
//     chargePop.style.display = "block"
// });

// document.getElementById("hover").addEventListener('onmousemove', function() {
//     var chargePop = document.getElementById('pop');
//     chargePop.style.display = "none"
// });

function mover() {
    var chargePop = document.getElementById('pop');
    chargePop.style.display = "block"
};


function mout() {
    var chargePop = document.getElementById('pop');
    chargePop.style.display = "none"
};

function hide(id) {
    var doc = document.getElementById(id);
    doc.style.display = "none";
}

function show(full, half) {
    debugger
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
    var hide = document.getElementById("charge");

    if (event.target == hide) {
        location.href = "posh_screen-22.html";
    }
}

function closeCert() {
    var cert = document.getElementById('certificate');
    cert.style.display = 'none';
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

function edite(index, x, y, z) {

    var name = document.getElementById(x);
    var email = document.getElementById(y);
    var cell = document.getElementById(z)

    var show = document.getElementById(index);
    show.style.display = "block";

    var putname = document.getElementById('putname');
    var putemail = document.getElementById('putemail');
    var putcell = document.getElementById('putcell')

    putname.value = name.innerHTML;
    putemail.value = email.innerHTML;
    putcell.value = cell.innerHTML;
}

function givelikes(num, img, dark, light) {
    var rate = document.getElementById(num);
    var likeIcon = document.getElementById(img);

    var initial = rate.innerHTML;

    var updatedValue = Number(initial) + 1;

    if (likeIcon.alt == "Unclicked") {
        rate.innerHTML = updatedValue;
        likeIcon.src = dark;
        likeIcon.alt = "clicked"
    } else {
        rate.innerHTML = Number(initial) - 1;
        likeIcon.src = light;
        likeIcon.alt = "Unclicked"
    }
}

function submit(loadId) {
    var load = document.getElementById(loadId);
    load.style.display = "block";
}

function failDisplay(loadId, failId) {

    var load = document.getElementById(loadId);
    var fail = document.getElementById(failId);

    load.style.display = "none";
    fail.style.display = "block"
}

function showsuccess(failId, sucessId) {
    var fail = document.getElementById(failId);
    var sucess = document.getElementById(sucessId);
    fail.style.display = "none"
    sucess.style.display = "block"
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