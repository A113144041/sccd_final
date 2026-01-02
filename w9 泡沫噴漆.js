function setup(){
    createCanvas(windowWidth, windowHeight);
    background(0);
}
function draw(){
    }
//function mousePressed(){
function mouseMoved() {
  background(0,10);      
  let count = int(random(5,15));
  let r = random(5,10);  
   for(let i = 0; i < count; i++) {  
    fill(random(100,255),random(100,255),random(100,255));
    //ellipse(mouseX + i * 10,mouseY,r);
    ellipse(mouseX + random(-100,100),mouseY + random(-100,100),r);
    r = r * 0.9;
    }    
}