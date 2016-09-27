var dot = {
	x: 100,
	y: 50
}

var col = {
	r: 255,
	g: 0,
	b: 0
}

function setup() {
	createCanvas(1400, 700);
	background(0, 0, 0);
}

function draw() {	
	col.r = random(100, 255);
	col.g = 0;
	col.b = random(100, 190);
	dot.x = random(0, width);
	dot.y = random(0, height);
	fill(col.r, col.g, col.b, 100);
	noStroke();
	ellipse(dot.x, dot.y, 20, 20);  
}