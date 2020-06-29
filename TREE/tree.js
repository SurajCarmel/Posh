$(document).ready(function() {

    $.getJSON("tree.json",
        function(result) {
            var data = result.json;
            var nodes = data.record;
            init(nodes);
        }
    );

    function init(nodes) {
        var children = getChildren("ALTA", nodes);
        for (var index = 0; index < children.length; index++) {
            $(".treeContainer").append(
                '<div class="node">' +
                '<div class="node_left">' +
                '<img class="toggle" src="cheveron-down-blue-filled-white-bordered.png" alt="">' +
                '<div class="nodeDetails">' +
                '<span class="nodeTitle">' + nodes[children[index]].title + '</span>' +
                '<p class="nodeDesc">' + nodes[children[index]].inventory_type_title + '</p>' +
                '</div>' +
                '</div>' +
                '<div class="node_right">' +
                '</div>' +
                '</div>'
            );
        }
        $(".treeContainer").children(".node").last().addClass("endNode");
        $(".treeContainer .toggle").click(function() {
            if ($(this).attr("src") === "cheveron-up-blue-filled-white-bordered.png") {

                $(this).attr("src", "cheveron-down-blue-filled-white-bordered.png");
                $(this).closest(".node_left").css("border-right", "0");
                $(this).closest(".node_left").next().hide();
                $(this).closest(".node_left").next().find(".node_right").hide();
                $(this).closest(".node_left").next().find(".node_left").css({ "border-right": "0" });
                $(this).closest(".node_left").next().find(".toggle").attr("src", "cheveron-down-blue-filled-white-bordered.png");


            } else {
                $(this).attr("src", "cheveron-up-blue-filled-white-bordered.png");

                fillnode($(this).next().children(".nodeTitle").text(), $(this).closest(".node_left").next(), nodes);
                if (($(this).closest(".node_left").next().children(".node").length != 0)) {
                    $(this).closest(".node_left").css("border-right", "1px dashed #CCCCCC");
                }
                $(this).closest(".node_left").next().show();
            }
        });
    }


    function fillnode(parentID, toFill, nodes) {
        childrenIndexList = getChildren(parentID, nodes); //fetching children nodes list

        if ($(toFill).children().length == 0) { // filling child nodes using list
            for (var index = 0; index < childrenIndexList.length; index++) {
                $(toFill).append(
                    '<div class="node">' +
                    '<div class="node_left">' +
                    '<img class="toggle" src="cheveron-down-blue-filled-white-bordered.png" alt="">' +
                    '<div class="nodeDetails">' +
                    '<span class="nodeTitle">' + nodes[childrenIndexList[index]].title + '</span>' +
                    '<p class="nodeDesc">' + nodes[childrenIndexList[index]].inventory_type_title + '</p>' +
                    '</div>' +
                    '</div>' +
                    '<div class="node_right">' +
                    '</div>' +
                    '</div>'
                );
            }

            $(toFill).children(".node").last().addClass("endNode"); // removing seperators for last nodes

            $(toFill).find(".toggle").click(function() {
                if ($(this).attr("src") === "cheveron-up-blue-filled-white-bordered.png") { // checking for image state

                    $(this).attr("src", "cheveron-down-blue-filled-white-bordered.png"); // changing image
                    $(this).closest(".node_left").next().hide(); // collapsing content
                    $(this).closest(".node_left").css("border-right", "0"); // removing right vertical seperator line

                    $(this).closest(".node_left").next().find(".toggle").attr("src", "cheveron-down-blue-filled-white-bordered.png"); // changing image of child nodes
                    $(this).closest(".node_left").next().find(".node_right").hide(); // collapsing child nodes
                    $(this).closest(".node_left").next().find(".node_left").css({ "border-right": "0" }); // removing right vertical seperator line of child nodes

                } else {
                    $(this).attr("src", "cheveron-up-blue-filled-white-bordered.png"); //changing image

                    fillnode($(this).next().children(".nodeTitle").text(), $(this).closest(".node_left").next(), nodes); //calling //? fillnode function

                    if (($(this).closest(".node_left").next().children(".node").length != 0)) { //applying right vertical seperator only if not empty
                        $(this).closest(".node_left").css("border-right", "1px dashed #CCCCCC");
                    }

                    $(this).closest(".node_left").next().show(); //expanding filled content

                }
            });
        }

    }

    function getChildren(parentNodeID, nodes) {

        var children = []; // initializing an empty array

        for (var index = 0; index < nodes.length; index++) {
            if (nodes[index].parent_id == parentNodeID) { //checking for nodes with the same parent_ID
                children.push(index); //collecting the nodes into array
            }
        }
        return children;
    }


});