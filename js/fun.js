//Fun canvas panel
var canvas = document.getElementById("dots");
canvas.width = 500;
canvas.height = 500;

var ctx = c.getContext("2d");
ctx.beginPath();
ctx.arc(95,50,40,0,2*Math.PI);
ctx.strokeStyle="#FF0000"
ctx.stroke();

