//Fun canvas panel
function canvasSetup() {
	var canvas = document.getElementById("dots");
	var ctx = c.getContext("2d");
	ctx.canvas.width = 400;
	ctx.canvas.height = 200;
	ctx.moveTo(0,0);
	ctx.lineTo(200,100);
	ctx.stroke();
}
