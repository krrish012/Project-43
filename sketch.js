var h, m, s; //new line added
var hrAngle, mnAngle, scAngle; //new line added
function setup() {
    createCanvas(750,600); //edited
    //createSprite(400, 200, 50, 50);
    noStroke();
    angleMode(DEGREES); // Change the mode to DEGREES
  }
  
  function draw() {
    background(0);
  
    
   // fill('white');
   // ellipse(395, 200, 280, 280);
  
    let h = hour();
    text('Time:\n' + h, 5, 50);  
    let m = minute();
    text(': ' + m, 30, 65);
  
    let s = second();
    text(': ' + s, 55, 65);//To create ab iterative rotation
    
    translate(300,300)//new line added
    rotate(-90);//new line added

    scAngle = map(s, 0, 60, 0, 360); //new line added
    mnAngle = map(m,0,60,0,360) //new line added
    hrAngle = map(h % 12,0,12,0,360) //new line added

    //drawSprites();
  
    //drawing seconds hand
    push();
    rotate(scAngle); //rotate the hand based on angle calculated //new line added
    stroke(255,0,0);//new line added
    // let a = atan2(100, 100);
    // translate(width / 2, height / 2);
    // push();
    // rotate(a);
    // stroke("Blue");
    strokeWeight(7);
    line(0,0,100,0); //edited
    pop();
    //pop();
  
  
   //drawing mins hand
    push();
    rotate(mnAngle);//new line added
    stroke(0,255,0);//new line added
  //  angleMode(DEGREES); // Change the mode to DEGREES
    // let b = atan2(m, 300);
    // translate(width / 2, height / 2);
    // push();
    // rotate(b);
    // stroke("Green");
    strokeWeight(7);
    line(0,0,75,0);
    pop();
    //pop();
  
     //drawing hr hand
    push();
    //angleMode(DEGREES); // Change the mode to DEGREES
    rotate(hrAngle);//new line added
    stroke(0,0,255);//new line added
    // let c = atan2(s, 500);
    // translate(width / 2, height / 2);
    // push();
    // rotate(c);
    // stroke("Red");
    strokeWeight(7);
    line(0,0,50,0); //edited
    pop();
    //pop();
    stroke(255,0,255);//new line added
    point(0,0)//new line added

    //drawing the arcs
    strokeWeight(10);//new line added
    noFill();//new line added
    //Seconds
    stroke(255,0,0);//new line added
    arc(0,0,300,300,0,scAngle);//new line added
    //Minutes
    stroke(0,255,0);//new line added
    arc(0,0,280,280,0,mnAngle);//new line added
    //Hour
    stroke(0,0,255);//new line added
    arc(0,0,260,260,0,hrAngle);//new line added
  }