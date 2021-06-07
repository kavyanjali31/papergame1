
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
var paperball;
var dustbinwall1,dustbinwall2,dustbinwall3;
var ground;

function preload()
{
	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.


	Engine.run(engine);
	paperball=new Paperball(200,500,1);
	dustbinwall1=new Dustbin(500,500,200,20);
	dustbinwall2=new Dustbin(490,500,20,100)
	dustbinwall3=new Dustbin(505,500,20,100)
	ground=new Ground(0,500,800,700)
  
}


function draw() {
  rectMode(CENTER);
  paperball.display();
  dustbinwall1.display();
  dustbinwall2.display();
  dustbinwall3.display();
  ground.display();
  keyPressed();
  background(0);
  
  drawSprites();
 
}
function keyPressed(){
if(keyCode===UP_ARROW){
	Matter.Body.applyForce(paperObject.body,paperObject.body.position,{x:85,y:-85})
}
}



