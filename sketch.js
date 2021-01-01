
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var roof;
var bobObject1, bobObject2, bobObject3, bobObject4, bobObject5;
var rope1, rope2, rope3, rope4, rope5;

function setup() {
	createCanvas(800, 700);

	engine = Engine.create();
	world = engine.world;
	
	roof = new Roof(400,200,700,50);

	bobObject1 = new Bob(400,550,100);
	bobObject2 = new Bob(500,550,100);
	bobObject3 = new Bob(600,550,100);
	bobObject4 = new Bob(300,550,100);
	bobObject5 = new Bob(200,550,100);

	rope1 = new Rope(bobObject1.body,roof.body,0,0);
	rope2 = new Rope(bobObject2.body,roof.body,100,0);
	rope3 = new Rope(bobObject3.body,roof.body,200,0);
	rope4 = new Rope(bobObject4.body,roof.body,-100,0);
	rope5 = new Rope(bobObject5.body,roof.body,-200,0);

	Engine.run(engine);  
}


function draw() {
  rectMode(CENTER);
  background("grey");
  
  bobObject1.display();
  bobObject2.display();
  bobObject3.display();
  bobObject4.display();
  bobObject5.display();

  rope1.display();
  rope2.display();
  rope3.display();
  rope4.display();
  rope5.display();

  roof.display();
}

function keyPressed(){
	if(keyCode === 32){
		Matter.Body.applyForce(this.rope5.body,{x:100, y:500});
	}
}
