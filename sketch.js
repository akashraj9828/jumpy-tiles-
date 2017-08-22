
// function preload() {
// 	wallhit=loadSound("sounds/wh.mp3")
// paddleHit=loadSound("sounds/ph.mp3")
// missBall=loadSound("sounds/bm.mp3")

// }

var w
var h

function setup() {


	// var canvas = createCanvas(windowWidth, windowHeight);
	// canvas.parent('game');

	createCanvas(windowWidth, windowHeight)
	// translate(width / 2, height)
	jumpy = new tile();
	w = width
	h = height
}






function draw() {


	background(51);
	push()
	translate(width / 2, height / 2)
	jumpy.draw();
	pop();
	// jumpy.update()
	// jumpy.update();

}

// function update() {

// }

function keyPressed() {
	if (keyCode == LEFT_ARROW) {
		jumpy.setvel(-1)
	} else if (keyCode == RIGHT_ARROW) {
		jumpy.setvel(1)
	}
	return false; // prevent default
}
