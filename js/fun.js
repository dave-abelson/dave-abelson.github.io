//Fun canvas panel
var WIDTH = window.innerWidth;
var HEIGHT = window.innerHeight;
var canvas;
var pxs = [];
var con;
var imd = false;
var cx; 
var cy;
var accentColor;

$(function() {
	canvasSetup();
	
	var i;
	for (i = 0; i < 50; i += 1) {
		pxs[i] = new Dot(random_color());	
		pxs[i].reset();
	}
	requestAnimationFrame(draw);
	setAccentColor();
	$('a').smoothScroll();
});

function canvasSetup() {
	
	WIDTH = window.innerWidth;
	HEIGHT = window.innerHeight;

	var canvas = document.getElementById("dots");

	canvas.width = WIDTH;
	canvas.height = HEIGHT;
	
	canvas.addEventListener('mousedown', cMouseDown, false);
	canvas.addEventListener('mouseup', cMouseUp, false);

	con = canvas.getContext("2d");
}

function setAccentColor() {
	var colorBlocks = ['red', 'orange', 'yellow', 'green', 'blue'];
	accentColor = colorBlocks[Math.floor(Math.random() * colorBlocks.length)];
}

function addAccentColor() {
	document.getElementById('name').className += ' ' + accentColor + '-font';
	
	for (i = 0; i < document.getElementsByClassName('break').length; i++) {
		document.getElementByClassName('break')[i].className += ' ' + accentColor;
	}
	
	for ( j = 0; j < document.getElementsByClassName('special').length; j++) {
		document.getElementsByClassName('special')[j].className += ' ' + accentColor + '-font';
	}
	
	for ( k = 0; k < document.getElementsByTagName('a').length - 5; k++) {
		document.getElementsByTagName('a')[k + 5].className += ' ' + accentColor + '-font';
		// added the +5 to not affect the <nav>... kinda hacky
	}
}

function cMouseDown(e) {
	cx = e.pageX;
	cy = e.pageY;
	imd = true;
}

function cMouseUp(e) {
	imd = false;
}

function draw() {
	con.clearRect(0,0, WIDTH, HEIGHT);
	
	var i;
	for (i = 0; i <pxs.length; i+= 1) {
		pxs[i].move();
		pxs[i].draw();
	}
	requestAnimationFrame(draw);
}

function random_color() {
	var colors = ['#d32542', '#ff7f19', '#ffc500', '#a3de00', '#25c7d3'];
	return colors[Math.floor(Math.random() * colors.length)];
}

function Dot(color) {
	this.settings = {
		lifetime : 8000,
		x_speed : 3,
		y_speed : 2,
		radius : 3,
		ratio : 1,
		x_origin : 960,
		y_origin : 540
	};

	this.reset = function() {
		// reset location
		this.x = (WIDTH * Math.random());
		this.y = (HEIGHT * Math.random());

		this.r = this.settings.radius;

		//reset velocity
		this.dx = (this.settings.x_speed) * (Math.random() < .5 ? -.5 : .5);
		this.dy = (this.settings.y_speed) * (Math.random() < .5 ? -.5 : .5);
		
		this.ratio = Math.random() * this.settings.lifetime;
		this.settings.ratio = Math.random() + 1;

		this.stop = Math.random() * .2 + .4;

		this.settings.xdrift *= Math.random() * (Math.random() < .5 ? -1 : 1);
		this.settings.ydrift *= Math.random() * (Math.random() < .5 ? -1 : 1);
		
		this.savedDx = null;
		this.savedDy = null;
	};
	
	this.draw = function () {
		if (this.ratio <= 0 || this.ratio >= this.settings.lifetime) {
			this.setttings.ratio = this.settings.ratio * -1;
		} else if (this.ratio >= this.settings.lifetime) {
			this.reset();
		}
		
		var new_opacity = 1 - (this.ratio / this.settings.lifetime);
		
		con.beginPath();
		con.arc(this.x, this.y, this.r, 0, Math.PI * 2, true);
		con.closePath();

		con.fillStyle = color;
		con.fill;
	};
	
	this.move = function() {
		if (!imd) {
			if (this.savedDx != null) {
				this.dx = (this.settings.x_speed) * (Math.random() < .5 ? -.5 : .5);
				this.savedDx = null;
			}
			if (this.savedDy != null) {
				this.dy = (this.settings.y_speed) * (Math.random() < .5 ? -.5 : .5);
				this.savedDy = null;
			}

			this.x += (this.ratio / this.settings.lifetime) * this.dx;
			this.y += (this.ratio / this.settings.lifetime) * this.dy;

			if (this.x > WIDTH - this.r || this.x < this.r)	{
				this.dx *= -1;
			}		
			if (this.y > HEIGHT - this.r || this.y < this.r) {
				this.dy *= -1;
			}
		} else {
			this.savedDx = this.dx;
			this.savedDy = this.dy;

			this.dx = cx - this.x;
			this.dy = cy - this.y;

			this.x += (this.ratio / (this.settings.lifetime * 10)) * this.dx;
			this.y += (this.ratio / (this.settings.lifetime * 10)) * this.dy;
		}
	};
}
