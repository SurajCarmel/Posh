$(document).ready(function() {
    var nodes;
    $.getJSON("tree.json", function(result) {
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
        $(".treeContainer").children(".node").last().addClass("endNode");
        $(".treeContainer .toggle").click(function() {
            if ($(this).attr("src") === "cheveron-up-blue-filled-white-bordered.png") {
                $(this).attr("src", "cheveron-down-blue-filled-white-bordered.png");
                $(this).closest(".node_left").css("border-right", "0");
                $(this).closest(".node_left").next().children(".node_right_bottom").hide();
            } else {
                $(this).attr("src", "cheveron-up-blue-filled-white-bordered.png");
                fillnode(
                    $(this).closest(".node_left").next().children(".node_right_top").children(".nodeDetails").children(".nodeTitle").text(),
                    $(this).closest(".node_left").next().children(".node_right_bottom")
                );
                if ($(this).closest(".node_left").next().children('.node_right_bottom').children(".node").length != 0) {
                    $(this).closest(".node_left").css("border-right", "1px dashed #CCCCCC");
                }
                $(this).closest(".node_left").next().children(".node_right_bottom").show();
            }
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
            $(toFill)
                .find(".toggle")
                .click(function() {
                    if (
                        $(this).attr("src") === "cheveron-up-blue-filled-white-bordered.png"
                    ) {
                        // checking for image state
                        $(this).attr("src", "cheveron-down-blue-filled-white-bordered.png"); // changing image
                        $(this).closest(".node_left").next().children(".node_right_bottom").hide(); // collapsing content
                        $(this).closest(".node_left").css("border-right", "0"); // removing right vertical seperator line
                    } else {
                        $(this).attr("src", "cheveron-up-blue-filled-white-bordered.png"); //changing image

                        fillnode(
                            $(this).closest(".node_left").next().children(".node_right_top").children(".nodeDetails").children(".nodeTitle").text(),
                            $(this).closest(".node_left").next().children(".node_right_bottom")
                        );

                        if ($(this).closest(".node_left").next().children('.node_right_bottom').children(".node").length != 0) {
                            //applying right vertical seperator only if not empty
                            $(this).closest(".node_left").css("border-right", "1px dashed #CCCCCC");
                        }
                        $(this).closest(".node_left").next().children(".node_right_bottom").show(); //expanding filled content
                    }
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

    $("#searchSubmit").click(function() {
        let searchWord = $("#treeSearch").val().trim();
        if (searchWord != '') {
            searchTree(searchWord);
        }
    });

    function searchTree(searchWord) {
        matches = getMatches(searchWord);
        console.log(matches);

        $('.nodeTitle').each(function() {
            for (let hit = 0; hit < matches.length; hit++) {
                console.log($(this).text() == matches[hit]);

                if ($(this).text() == matches[hit]) {
                    $(this).parent().css("background-color", "#FFFFFF");
                    $(this).parent().parent().css("background-color", "#FFFFFF");
                    $(this).parent().parent().parent().prev().css("background-color", "#FFFFFF");
                }
            }
        });
    }

    function getMatches(searchWord) {
        var matches = [];
        for (let c = 0; c < nodes.length; c++) {
            if (nodes[c].title.includes(searchWord)) {
                matches.push(nodes[c].id);
            }
        }
        return matches;
    }
});