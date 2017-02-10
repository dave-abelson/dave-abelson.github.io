//Fun canvas panel
$(function() {
	canvasSetup();
});

function canvasSetup() {
	
	WIDTH = window.innerWidth;
	HEIGHT = window.innerHeight;

	var canvas = document.getElementById("dots");

	canvas.width = WIDTH;
	canvas.height = HEIGHT;
	var ctx = canvas.getContext("2d");
	ctx.fillStyle="#FF0000";
	ctx.fillRect(20,20,150,100);
}

