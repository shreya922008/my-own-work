var button

function preload(){
  bg1=loadImage("code 1.jpg")
  bg2=loadImage("code 2.jpg")
  bg3=loadImage("code.jpg")
  bg4=loadImage("code3.jpg")
  bg5=loadImage("code4.jpg")
}

function setup() {
  createCanvas(800,400);
  button=new Button()
}

function draw() {

  background(bg3);  
  ques()
button.display()
  drawSprites();
}