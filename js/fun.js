//Fun canvas panel
$(function() {
	canvasSetup();
});

function canvasSetup() {

	var canvas = document.getElementById("dots");
	canvas.style.width = '100%';
	canas.style.height = '100%';

	canvas.width = canvas.offsetWidth;
	canvas.height = canvas.offsetHeight;
	var ctx = canvas.getContext("2d");
	ctx.fillStyle="#FF0000";
	ctx.fillRect(20,20,150,100);
}

