let z = [];
let x = [];
let y = [];
let c = [];
let dep = 150;

function setup() {
  //   frameRate(100);
  createCanvas(windowWidth, windowHeight, WEBGL);
  for (let i = 0; i < dep; i = i + 1) {
    x[i] = random(-width / 2, width / 2);
    y[i] = random(-height / 2, height / 2);
    z[i] = random(-1000, 1000);
    c[i] = color(random(200), 0, 100);
  } // 每一幀, 畫幾個box
}

function draw() {
  background(200);
  lights();
  ambientLight(120, 10, 10);
  orbitControl();

  for (let i = 0; i < 10; i = i + 1) {
    z[i] = z[i] + 2;
    if (z[i] > 1000) {
      z[i] = -1000;
    } // 每一幀 增加z的值
    push();
    translate(x[i], 0, z[i]);
    fill(c[i]);
    box(60);
    noStroke();
    pop();
  }
}