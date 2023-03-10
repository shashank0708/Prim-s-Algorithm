var vertices = [];

function setup() {
	createCanvas(windowWidth, windowHeight);

}

function mousePressed() {
	var b = createVector(mouseX, mouseY);
	vertices.push(b);
}


function draw() {
	background(0);

	var reached = [];
	var unreached = [];

	for (var i = 0; i < vertices.length; i++) {
		unreached.push(vertices[i]);
	}

	reached.push(unreached[0]);
	unreached.splice(0, 1);

	while (unreached.length > 0) {
		var record = 100000;
		var rIndex;
		var uIndex;
		for (var i = 0; i < reached.length; i++) {
			for (var j = 0; j < unreached.length; j++) {
				var v1 = reached[i];
				var v2 = unreached[j];
				var d = dist(v1.x, v1.y, v2.x, v2.y);
				if (d < record) {
					record = d;
					rIndex = i;
					uIndex = j;
				}
			}
		}
		stroke(255);
		strokeWeight(2);
		line(reached[rIndex].x, reached[rIndex].y, unreached[uIndex].x, unreached[uIndex].y);
		reached.push(unreached[uIndex]);
		unreached.splice(uIndex, 1);
	}


	for (var i = 0; i < vertices.length; i++) {
		fill(255);
		stroke(255);
		ellipse(vertices[i].x, vertices[i].y, 12, 12);
    color(0)
	}



}