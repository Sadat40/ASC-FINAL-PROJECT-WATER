let state=1;// starting page
function setup() {
    createCanvas(windowWidth, windowHeight);
  }

  function draw() {
    //background(166);
    if (state==1){
        fill (166);
        rectMode(CENTER);
        rect (windowWidth/2, windowHeight/5,windowWidth/2, windowHeight/8);
        fill (0);
        textSize(32);
        textAlign(LEFT);
        text("Welcome to the Water Works Quiz! Let's see if you paid attention...", windowWidth/2, windowHeight/5);
        
    }
  }

function windowResized() {
    resizeCanvas(windowWidth, windowHeight);
  }