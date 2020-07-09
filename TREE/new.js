$(document).ready(function() {
    var nodes;
    $.getJSON("new.json", function(result) {
        nodes = result.json.record;
        initialize("ALTA", ".treeContainer");
    });

    function initialize(parentID, toFill) {
        var children = getChildren(parentID);
        for (var i = 0; i < children.length; i++) {
            $(toFill).append(
                '<div class="node">' +
                '   <div class="nodeRow">' +
                '       <div class="nodeRow_left">' +
                '           <div class="dividerTop"></div>' +
                '           <div class="dividerBottom">' +
                '               <img class="toggle" src="cheveron-down-blue-filled-white-bordered.png" alt="">' +
                '           </div>' +
                '       </div>' +
                '       <div class="nodeRow_right">' +
                '           <div class="nodeDetails">' +
                '               <span class="nodeTitle">' + nodes[children[i]].title + '</span>' +
                '               <p class="nodeDesc">' + nodes[children[i]].inventory_type_title + '</p>' +
                '           </div>' +
                '       </div>' +
                '   </div>' +
                '   <div class="childRow" id="' + nodes[children[i]].title + nodes[children[i]].id + '">' +
                '   </div>' +
                '</div>'
            );
            check(nodes[children[i]].title, '#' + nodes[children[i]].title + nodes[children[i]].id);
        }
        $('.dividerTop').first().css("border-left", "0");
        $('.dividerBottom').last().css("border-left", "0");
        $('.nodeRow').css("border-left", "0");
        $('.childRow').css("border-left", "0");
    }

    function check(parentID, toFill) {
        var children = getChildren(parentID);
        if (children.length) {
            fillNode(parentID, toFill);
        } else {

        }
    }

    function getChildren(parentNodeID) {
        var children = []; // initializing an empty array
        for (var index = 0; index < nodes.length; index++) {
            if (nodes[index].parent_id == parentNodeID) { //checking for nodes with the same parent_ID
                children.push(index); //collecting the nodes into array
            }
        }
        return children;
    }

    function fillNode(parentID, toFill) {
        var children = getChildren(parentID);
        for (var i = 0; i < children.length; i++) {
            $(toFill).append(
                '<div class="nodeSpacer"></div>' +
                '<div class="node">' +
                '   <div class="nodeRow">' +
                '       <div class="nodeRow_left">' +
                '           <div class="dividerTop"></div>' +
                '           <div class="dividerBottom">' +
                '               <img class="toggle" src="cheveron-down-blue-filled-white-bordered.png" alt="">' +
                '           </div>' +
                '       </div>' +
                '       <div class="nodeRow_right">' +
                '           <div class="nodeDetails">' +
                '               <span class="nodeTitle">' + nodes[children[i]].title + '</span>' +
                '               <p class="nodeDesc">' + nodes[children[i]].inventory_type_title + '</p>' +
                '           </div>' +
                '       </div>' +
                '   </div>' +
                '   <div class="childRow"  id="' + nodes[children[i]].title + nodes[children[i]].id + '">' +
                '   </div>' +
                '</div>'
            );
            check(nodes[children[i]].title, '#' + nodes[children[i]].title + nodes[children[i]].id);
        }
    }
});