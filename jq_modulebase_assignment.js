$(function() {
	$(".all_div").draggable( { 
		handle: ".dialog_title",
		revert: true,
	});
	
	$("#middle_div").droppable();
	pos_drag = $('#drag_four').offset();
});
  
function dropDiv() {
	$(".all_div").draggable({ revert: false });
	$(".all_div").draggable("disable");
	$("#dialog").dialog();
	$(".ui-button").click(function() {
		$(".all_div").draggable({revert: true});
		$(".all_div").draggable("enable");
	if (dragged_box == "drag_one") {
		$("#drag_one").animate( { 
			"left": "0",
			"top": "0",
			}, 1000 );
		} else if (dragged_box == "drag_two") {
			$("#drag_two").animate( { 
			"left": pos_drag.left,
			"top": "0px",
			}, 1000 );
		} else if (dragged_box == "drag_three") {
			$("#drag_three").animate( { 
			"left": "0",
			"top": pos_drag.top,
			}, 1000 );	
		} else if (dragged_box == "drag_four") {
			$("#drag_four").animate( { 
			"left": pos_drag.left,
			"top": pos_drag.top,
			}, 1000 );	
		}
	});
}

let dragged_box;
let pos_drag;

function dragDiv(dragged_div) {
	dragged_box = dragged_div.id;
}