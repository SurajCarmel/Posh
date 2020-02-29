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
        borderchange[0].style.border = "1px solid #BF574A"
        borderchange[1].style.border = "1px solid #BF574A"
        spaceing.style.paddingTop = '1%';

    } else if (emailcontent.value !== "dev" || passcontent.value !== "1234") {
        showinvalid.style.display = "block";
        invalidtop[0].style.paddingTop = '0';
    }
}

function nextNav(dest) {
    location.href = dest

}

function resetpwd(border, msg, email) {

    var txtborder = document.getElementById(border);
    var errormsg = document.getElementById(msg);
    var invalidemail = document.getElementById(email);

    if (txtborder.value == "") {
        txtborder.style.border = "1px solid #BF574A";
        errormsg.style.display = "block"
        txtborder.value = ""
    } else if (txtborder.value !== "john@carmelsolutions.in") {
        invalidemail.style.display = "block";
        txtborder.value = ""
    }

}