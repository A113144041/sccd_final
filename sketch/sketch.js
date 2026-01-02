palettes = [
	  [
    [255, 170, 200],
		[150, 210, 255],
    [160, 255, 220],
    [210, 180, 255],
    [255, 240, 170],
  ],
  [
    [230, 180, 70],
    [230, 110, 60],
    [160, 190, 90],
    [80, 180, 190],
    [160, 100, 70],
  ],
  [
    [255, 30, 150],
    [0, 210, 255],
    [80, 255, 80],
    [200, 80, 255],
    [255, 255, 100],
  ],
  [
    [245, 245, 245],
    [190, 200, 210],
    [70, 110, 220],
    [70, 110, 220],
    [230, 60, 80],
  ],
	];

let cp = 0;
let col = 10;
let row = 10;
let siz;
let cg = [];

function setup() {
  createCanvas(400, 400);
  rectMode(CENTER);
  noStroke();
  siz = width / col;

  for (let y = 0; y < row; y++) {
    cg[y] = [];
    for (let x = 0; x < col; x++) {
      cg[y][x] = random(palettes[cp]);
    }
  }
}

function draw() {
  background(0);

  for (let y = 0; y < row; y++) {
    for (let x = 0; x < col; x++) {
      let cx = x * siz + siz / 2;
      let cy = y * siz + siz / 2;

			if (!mouseIsPressed) {
        cg[y][x] = random(palettes[cp]);
      }
      let c = cg[y][x];
      fill(c[0], c[1], c[2]);

      let isSquare = (x + y) % 2 == 0;
      if (y >= row / 2) isSquare = !isSquare;

      if (isSquare) rect(cx, cy, siz, siz, 8);
      else ellipse(cx, cy, siz, siz);
    }
  }
}

function mousePressed() {}

function keyPressed() {
  if (key === "P" || key === "p") {
    cp = (cp + 1) % palettes.length;
  }
}