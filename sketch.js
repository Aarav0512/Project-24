
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var dustbin1,dustbin2,dustbin3;
var ground;
var paper;

function preload()
{
	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.

	ground = new Ground(width/2,650,800,20);
	paper = new Paper(100,500,30);
	dustbin1 = new Dustbin(600,640,150,20);
	dustbin2 = new Dustbin(520,600,20,100);
	dustbin3 = new Dustbin(680,600,20,100);


	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(255);


paper.display();
ground.display();
dustbin1.display();
dustbin2.display();
dustbin3.display();

}
function keyPressed(){
	if(keyCode === UP_ARROW) {
		Matter.Body.applyForce(paper.body,paper.body.position,{x:40,y:-250});
	}
}
  

 

