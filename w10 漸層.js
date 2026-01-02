function setup(){
    createCanvas(windowWidth, windowHeight);
    
}
function draw(){
   blendMode(BLEND);
    background(255);
    blendMode(MULTIPLY);

    let c1= color("#7197efff");
    let c2= color("#580a70ff");
    noStroke();

    //左側藍色方形漸層
    for(let i = 0; i < windowWidth; i += 50){
        c1.setAlpha(35);
        fill(c1);

        // 用方形取代圓形（保持中心點一致）
        square(windowWidth / 4 - i / 2,height / 2 - i / 2,i);
    }

    //右側紫色方形漸層
    for(let i = 0; i < windowWidth; i += 50){
        c2.setAlpha(35);
        fill(c2);
        square(windowWidth - 350 - i / 2,height / 2 - i / 2,i);
/*
fill(c1);
//rect(0, height / 2, 50, 50);
//rect(windowWidth = 50, height / 2, 50, 50);//方形
fill(c2);
for(let i = 0; i < windowWidth; i+=50){
    c1.setAlpha(35);
    ellipse(windowWidth / 4, height / 2, i);
    fill(c1);
    noStroke();
        }

for(let i = 0; i < windowWidth; i+=50){
    c2.setAlpha(35);
    ellipse(windowWidth - 350, height / 2, i);
    fill(c2);
    noStroke();  
    
    /*
    let rate = map(i, 0, windowWidth, 0, 1.25);
    let midColor = lerpColor(c1, c2, rate);
    fill(midColor);
    rect(i, 0, 50, windowHeight);
    noStroke();
    */

    }
}
