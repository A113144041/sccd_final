let xp = 50;
let yp = 50;
let xs = 0.5;
let ys = 3;

let bgGif;   // 背景 GIF

function preload() {
  // 載入GIF
  bgGif = loadImage("bg.gif");
}
function setup() {
  createCanvas(windowWidth, windowHeight);
}//建立視窗大小

function draw() {
  image(bgGif, 0, 0, windowWidth, windowHeight);//讓背景 GIF 填滿
  fill(94, 0, 255);//球顏色
  circle(xp, yp, 40);//(X位置,Y位置,直徑)

  xp = xp + xs;//球X軸變化
  yp = yp + ys;//球Y軸變化

  xs = xs + 0.01;//衝阿
  ys = ys + 0.1;//重力

  if (yp > windowHeight) {
    ys = -ys * 0.8;
  }//Y軸反彈
  if (xp < 0 || xp > windowWidth) {
    xs = -xs * 0.8;
  }//X軸反彈
  console.log(floor(yp));
  //監控y數值
}