
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;

var bob1,bob2,bob3,bob4,bob5;
var roof;
var rope1,rope2,rope3,rope4,rope5;
var background1;
var bgImg;
var bg;
function preload(){
	bgImg=loadImage("Lab.jpg");
}

function setup() {
	createCanvas(800, 700);
	
	
	engine = Engine.create();
	world = engine.world;


//	bg=new Bg(400,400,100,100);
	//Bob
	bob1 = new Bob(360,250,20,{restitution:0.0004},{density: 0.4},{isStatic: false});
	bob2 = new Bob(400,250,20);
	bob3 = new Bob(440,250,20);
	bob4 = new Bob(480,250,20);
	bob5 = new Bob(520,250,20,{restitution:0.0004},{isStatic: false});

	//Roof
//	roof = new Roof(400,90,200,20);

	//Ropes
	rope1 = new Rope(bob1.body,{x:360,y:180});
	rope2 = new Rope(bob2.body,{x:400,y:180});
	rope3 = new Rope(bob3.body,{x:440,y:180});
	rope4 = new Rope(bob4.body,{x:480,y:180});
	rope5 = new Rope(bob5.body,{x:520,y:180});

	Engine.run(engine);
  
}


function draw() {
	//Prees();
  rectMode(CENTER);
  background(bgImg);
  
  //display bobs
  bob1.display();
  bob2.display();
  bob3.display();
  bob4.display();
  bob5.display();

  //display roof
  //roof.display();

  //display ropes
  rope1.display();
  rope2.display();
  rope3.display();
  rope4.display();
  rope5.display();

// bg.display();
}

//function keyPressed(){
//	if(keyCode===LEFT_ARROW){
	//	Matter.Body.applyForce(bob1.body,bob5.body.position,{x:-20,y:-20})
//	}
//}
function mouseDragged(){
//	Matter.Body.applyForce(bob1.body,bob5.body.position,{x:mouseX,y:mouseY})
	Matter.Body.setPosition(bob1.body, {x:mouseX, y:mouseY});
  }