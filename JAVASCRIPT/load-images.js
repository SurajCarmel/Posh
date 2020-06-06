var scr_width = window.innerWidth || document.documentElement.clientWidth || document.getElementsByTagName('body')[0].clientWidth;
var scr_height = window.innerHeight || document.documentElement.clientHeight || document.getElementsByTagName('body')[0].clientHeight;

alert(scr_width);

function pick_photo() {

    if (scr_width < 481 && scr_width > 360) {
        alert("mobile-s");
        if (scr_width > scr_height) {
            //landscape_mode
            alert("landscape");
            //server-request
        } else {
            //potrait_mode
            alert("potrait");
            //server-request
        }
    } else if (scr_width < 769 && scr_width > 481) {
        alert("mobile-l");
        if (scr_width > scr_height) {
            //landscape_mode
            alert("landscape");
            //server-request
        } else {
            //potrait_mode
            alert("potrait");
            //server-request
        }
    } else if (scr_width > 768 && scr_width < 1025) {
        alert("tab");
        if (scr_width > scr_height) {
            //landscape_mode
            alert("landscape");
            //server-request
        } else {
            //potrait_mode
            alert("potrait");
            //server-request
        }
    } else if (scr_width > 1024 && scr_width < 1441) {
        alert("small");
        if (scr_width > scr_height) {
            //landscape_mode
            alert("landscape");
            //server-request
        } else {
            //potrait_mode
            alert("potrait");
            //server-request
        }
    } else if (scr_width > 1440 && scr_width < 1921) {
        alert("medium");
        //server-request
    } else if (scr_width > 1920 && scr_width < 2561) {
        alert("large");
        //server-request
    } else if (scr_width > 2560) {
        alert("4k");
        //server-request
    } else
        alert("error");
}