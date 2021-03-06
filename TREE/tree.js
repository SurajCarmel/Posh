$(document).ready(function () {
    var nodes;
    $.getJSON("tree.json", function (result) {
        var data = result.json;
        nodes = data.record;
        init(nodes);
    });

    function init(nodes) {
        var children = getChildren("ALTA");
        for (var index = 0; index < children.length; index++) {
            $(".treeContainer").append(
                '<div class="node">' +
                '   <div class="node_left">' +
                '       <img class="toggle" src="cheveron-down-blue-filled-white-bordered.png" alt="">' +
                '       <div class="left_top">' +
                '       </div> ' +
                '       <div class="left_bottom">' +
                '       </div> ' +
                '   </div>' +
                '   <div class="node_right">' +
                '       <div class="node_right_top">' +
                '           <div class="nodeDetails">' +
                '               <span class="nodeTitle">' + nodes[children[index]].title + '</span>' +
                '               <p class="nodeDesc">' + nodes[children[index]].inventory_type_title + '</p>' +
                '           </div>' +
                '       </div>' +
                '       <div class="node_right_bottom">' +
                '       </div>' +
                '   </div>' +
                '</div>'
            );
        }
        $(".treeContainer").find(".left_top").first().css({
            "margin-left": "-1px",
            "border-left": "1px solid #EEEEEE"
        });
        $(".treeContainer").children(".node").last().addClass("endNode");
        $(".treeContainer").children(".node").last().children(".node_left").children(".left_top").css("border-left", "1px dashed #CCCCCC");
        $(".treeContainer .toggle").click(function () {
            if ($(this).attr("src") === "cheveron-up-blue-filled-white-bordered.png") {
                $(this).attr("src", "cheveron-down-blue-filled-white-bordered.png");
                $(this).closest(".node_left").children(".left_bottom").css("border-right", "0");
                $(this).closest(".node_left").next().children(".node_right_bottom").hide();
            } else {
                $(this).attr("src", "cheveron-up-blue-filled-white-bordered.png");
                fillnode(
                    $(this).closest(".node_left").next().children(".node_right_top").children(".nodeDetails").children(".nodeTitle").text(),
                    $(this).closest(".node_left").next().children(".node_right_bottom")
                );
                if ($(this).closest(".node_left").next().children('.node_right_bottom').children(".node").length != 0) {
                    $(this).closest(".node_left").children(".left_bottom").css("border-right", "1px dashed #CCCCCC");
                }
                $(this).closest(".node_left").next().children(".node_right_bottom").show();
            }
        });

        $(".node_right_top").hover(function () {
            $(this).css("background-color", "#CCCCCC");
            $(this).children(".nodeDetails").css("background-color", "#CCCCCC");
            // $(this).parent().prev().css("background-color", "#CCCCCC");
        }, function () {
            if ($(this).hasClass("selected")) {
                $(this).css("background-color", "#FFF");
                $(this).children(".nodeDetails").css("background-color", "#FFF");
                // $(this).parent().prev().css("background-color", "#FFF");
            } else {
                $(this).css("background-color", "#EEEEEE");
                $(this).children(".nodeDetails").css("background-color", "#EEEEEE");
                // $(this).parent().prev().css("background-color", "#EEEEEE");
            }
        });

        $(".node_right_top").click(function () {
            $(".node_right_top").css("background-color", "#EEE");
            $(".node_right_top").children(".nodeDetails").css("background-color", "#EEE");
            // $(".node_right_top").parent().prev().css("background-color", "#EEE");
            $(".node_right_top").removeClass("selected");
            $(".node_right_top").children(".nodeDetails").removeClass("selected");
            // $(".node_right_top").parent().prev().removeClass("selected");
            $(this).addClass("selected");
            $(this).children(".nodeDetails").addClass("selected");
            // $(this).parent().prev().addClass("selected");
        });
    }

    function fillnode(parentID, toFill) {
        childrenIndexList = getChildren(parentID); //fetching children nodes list
        if ($(toFill).children().length == 0) {
            // filling child nodes using list
            for (var index = 0; index < childrenIndexList.length; index++) {
                $(toFill).append(
                    '<div class="node">' +
                    '   <div class="node_left">' +
                    '       <img class="toggle" src="cheveron-down-blue-filled-white-bordered.png" alt="">' +
                    '       <div class="left_top">' +
                    '       </div> ' +
                    '       <div class="left_bottom">' +
                    '       </div> ' +
                    "   </div>" +
                    '   <div class="node_right">' +
                    '       <div class="node_right_top">' +
                    '           <div class="nodeDetails">' +
                    '               <span class="nodeTitle">' + nodes[childrenIndexList[index]].title + '</span>' +
                    '               <p class="nodeDesc">' + nodes[childrenIndexList[index]].inventory_type_title + '</p>' +
                    '           </div>' +
                    '       </div>' +
                    '       <div class="node_right_bottom">' +
                    '       </div>' +
                    '   </div>' +
                    '</div>'
                );
            }

            $(toFill).children(".node").last().addClass("endNode"); // removing seperators for last nodes
            $(toFill).children(".node").last().children(".node_left").children(".left_top").css("border-left", "1px dashed #CCCCCC");
            $(toFill)
                .find(".toggle")
                .click(function () {
                    if (
                        $(this).attr("src") === "cheveron-up-blue-filled-white-bordered.png"
                    ) {
                        // checking for image state
                        $(this).attr("src", "cheveron-down-blue-filled-white-bordered.png"); // changing image
                        $(this).closest(".node_left").next().children(".node_right_bottom").hide(); // collapsing content
                        $(this).closest(".node_left").children(".left_bottom").css("border-right", "0"); // removing right vertical seperator line
                    } else {
                        $(this).attr("src", "cheveron-up-blue-filled-white-bordered.png"); //changing image

                        fillnode(
                            $(this).closest(".node_left").next().children(".node_right_top").children(".nodeDetails").children(".nodeTitle").text(),
                            $(this).closest(".node_left").next().children(".node_right_bottom")
                        );

                        if ($(this).closest(".node_left").next().children('.node_right_bottom').children(".node").length != 0) {
                            //applying right vertical seperator only if not empty
                            $(this).closest(".node_left").children(".left_bottom").css("border-right", "1px dashed #CCCCCC");
                        }
                        $(this).closest(".node_left").next().children(".node_right_bottom").show(); //expanding filled content
                    }
                });

            $(".node_right_top").hover(
                function () {
                    $(this).css("background-color", "#CCCCCC");
                    $(this).children(".nodeDetails").css("background-color", "#CCCCCC");
                    // $(this).parent().prev().css("background-color", "#CCCCCC");
                },
                function () {
                    if ($(this).hasClass("selected")) {
                        $(this).css("background-color", "#FFF");
                        $(this).children(".nodeDetails").css("background-color", "#FFF");
                        // $(this).parent().prev().css("background-color", "#FFF");
                    } else {
                        $(this).css("background-color", "#EEEEEE");
                        $(this).children(".nodeDetails").css("background-color", "#EEEEEE");
                        // $(this).parent().prev().css("background-color", "#EEEEEE");
                    }
                });

            $(".node_right_top").click(function () {
                $(".node_right_top").css("background-color", "#EEEEEE");
                $(".node_right_top").children(".nodeDetails").css("background-color", "#EEEEEE");
                // $(".node_right_top").parent().prev().css("background-color", "#EEEEEE");
                $(".node_right_top").removeClass("selected");
                $(".node_right_top").children(".nodeDetails").removeClass("selected");
                // $(".node_right_top").parent().prev().removeClass("selected");
                $(this).addClass("selected");
                $(this).children(".nodeDetails").addClass("selected");
                // $(this).parent().prev().addClass("selected");
            });
        }
    }

    function getChildren(parentNodeID) {
        var children = []; // initializing an empty array
        for (var index = 0; index < nodes.length; index++) {
            if (nodes[index].parent_id == parentNodeID) {
                //checking for nodes with the same parent_ID
                children.push(index); //collecting the nodes into array
            }
        }
        return children;
    }

});