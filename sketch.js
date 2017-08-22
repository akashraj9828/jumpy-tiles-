
// function preload() {
// 	wallhit=loadSound("sounds/wh.mp3")
// paddleHit=loadSound("sounds/ph.mp3")
// missBall=loadSound("sounds/bm.mp3")

// }

function setup() {


	// var canvas = createCanvas(windowWidth, windowHeight);
	// canvas.parent('game');

	createCanvas(windowWidth,windowHeight)

	jumpy = new tile();
}






function draw() {

	
	background(51);
	translate(width / 2, height)
	jumpy.draw();
	// jumpy.update();

}






function displayText(data, lox, loy, clr, style) {

	txt = "" + data;
	if (clr) {
		fill(clr);
	} else {
		fill("black")
	}
	if (style) {
		textStyle(style)
	} else {
		textStyle(NORMAL)
	}


	stroke(0)
	textSize(40);
	x = lox
	y = loy
	textAlign(CENTER)
	text(txt, lox, loy);


}