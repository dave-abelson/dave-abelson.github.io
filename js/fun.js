//Fun canvas panel
$(function() {
	canvasSetup();
});

function canvasSetup() {

	var canvas = document.getElementById("dots");
	canvas.width = 500;
	canvas.height = 500;
	var ctx = canvas.getContext("2d");
	ctx.fillStyle="#FF0000";
	ctx.fillRect(20,20,150,100);
}

