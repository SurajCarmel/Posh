function loginError(show, border, forgot, invalid, logintop, emailtxt, passtxt) {

    var showerror = document.getElementsByClassName(show);
    var borderchange = document.getElementsByClassName(border);
    var spaceing = document.getElementById(forgot);
    var showinvalid = document.getElementById(invalid);
    var invalidtop = document.getElementsByClassName(logintop);
    var emailcontent = document.getElementById(emailtxt);
    var passcontent = document.getElementById(passtxt);

    if (emailcontent.value == "" || passcontent.value == "") {
        showerror[0].style.display = "block";
        showerror[1].style.display = "block";
        borderchange[0].style.border = "1px solid #BF574A";
        borderchange[1].style.border = "1px solid #BF574A";
        spaceing.style.paddingTop = '1%';

    } else if (emailcontent.value !== "example@address.com" || passcontent.value !== "secret007") {
        showinvalid.style.display = "block";
        invalidtop[0].style.paddingTop = '0';
    }
}

function nextNav(dest) {
    location.href = dest;

}

function resetpwd(border, msg, email) {

    var txtborder = document.getElementById(border);
    var errormsg = document.getElementById(msg);
    var invalidemail = document.getElementById(email);

    if (txtborder.value == "") {
        txtborder.style.border = "1px solid #BF574A";
        errormsg.style.display = "block";
        txtborder.value = "";
    } else if (txtborder.value !== "example@address.com") {
        invalidemail.style.display = "block";
        txtborder.value = "";
        errormsg.style.display = "none";
    } else if (txtborder.value == "example@address.com") {
        var emailsuccess = "../HTML/c-on_forgot-pwd-success.html";
        nextNav(emailsuccess);
    }

}


function passwordShow() {
    var pwdToggle = document.getElementById("passwordShow");
    var passcontent = document.getElementById("password");
    if (pwdToggle.alt == "unclicked") {
        pwdToggle.src = '../ASSETS/111.png';
        pwdToggle.alt = "clicked";
        passcontent.type = "text";
    } else {
        pwdToggle.src = "../ASSETS/Artboard 1 copy 16@16x.png";
        pwdToggle.alt = "unclicked";
        passcontent.type = "password";
    }
}

function showOtp(showerror, otpbox) {
    var showred = document.getElementById(showerror);
    var otpborder = document.getElementsByClassName(otpbox);
    var otpone = document.getElementById("otpOne").value;
    var otptwo = document.getElementById("otpTwo").value;
    var otpthree = document.getElementById("otpThree").value;
    var otpfour = document.getElementById("otpFour").value;
    var otpinput = otpone + otptwo + otpthree + otpfour;
    if (otpinput !== '1234') {
        showred.style.display = "block";
        for (var index = 0; index < otpborder.length; index++) {
            otpborder[index].style.border = "1px solid #BF574A";
        }
    } else if (otpinput == '1234') {
        var mobilemsg = "../HTML/c-on_forgot-otp-success.html";
        nextNav(mobilemsg);
    }


}


// ===============================================================admin===========================================================================



function adminError(error, invalid, box) {

    var showerror = document.getElementsByClassName(error);
    var showinvalid = document.getElementsByClassName(invalid);
    var inputbox = document.getElementsByClassName(box);

    if (inputbox[0].value == "" || inputbox[1].value == "") {
        showerror[0].style.display = "block";
        showerror[1].style.display = "block";
    } else if (inputbox[0].value !== "example@address.com" || inputbox[1].value !== "secret007") {
        showinvalid[0].style.display = "block";
    } else if (inputbox[0].value == "example@address.com" || inputbox[1].value == "secret007") {
        var myrequest = "../HTML/web-1920-1.html";
        nextNav(myrequest);
    }
}

function showdropdown(drop) {
    var showdrop = document.getElementById(drop);

    if (showdrop.style.display == "none") {
        showdrop.style.display = "block";
    } else {
        showdrop.style.display = "none";
    }

}

function publish(bgroundid, editlistid) {

    var bground = document.getElementById(bgroundid);
    var editlist = document.getElementById(editlistid);

    if (bground.style.display == "none" && editlist.style.display == "none") {
        bground.style.display = "block";
        editlist.style.display = "block";
    } else {
        bground.style.display = "none";
        editlist.style.display = "none";
    }
}

function courseerror(fullID, halfID, titleID, descID) {

    var fullerror = document.getElementById(fullID);
    var halferror = document.getElementById(halfID);
    var title = document.getElementById(titleID);
    var desc = document.getElementById(descID);
    if (title.value !== "" || desc.value !== "") {
        nextNav("../HTML/c-on_Web_1920-61.html")

    } else {
        fullerror.style.display = "block"
        halferror.style.display = "block"
    }

}