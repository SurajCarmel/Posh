$(document).ready(function() {


    $(".node_right").hide();
    $(".nodeContent").css("display", "none");
    $(".toggle").attr("src", "cheveron-down-blue-filled-white-bordered.png");

    $(".lvlOne").last().addClass("endNode");
    $(".lvlTwo").last().addClass("endNode");
    $(".lvlThree").last().addClass("endNode");
    $(".lvlFour").last().addClass("endNode");
    $(".lvlFive").last().addClass("endNode");


    $(".toggle").click(function() {
        if ($(this).attr("src") === "cheveron-up-blue-filled-white-bordered.png") {

            $(this).attr("src", "cheveron-down-blue-filled-white-bordered.png");
            $(this).closest(".node_left").css("border-right", "0");
            $(this).closest(".node_left").next().hide();
            $(this).closest(".node_left").next().children(".node_right").hide();

        } else {
            $(this).attr("src", "cheveron-up-blue-filled-white-bordered.png");
            if (($(this).closest(".node_left").next().children(".node").length != 0)) {
                $(this).closest(".node_left").css("border-right", "1px dashed #CCCCCC");
            }
            $(this).closest(".node_left").next().show();

        }
    });

    $(".nodeDetails").click(function() {

        if ($(this).closest(".node_left").next().children(".nodeContent").css("display") == "none") {
            $(this).closest(".node_left").next().children(".nodeContent").css("display", "block");
        } else {
            $(this).closest(".node_left").next().children(".nodeContent").css("display", "none");
        }
    });
});