
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint=Matter.Constraint;
var bobObject1,bobObject2,bobObject3,bobObject4,bobObject5;
var roof1;
var rope1,rope2,rope3,rope4,rope5;
var body;
function preload()
{
	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

roof1=new Roof(400,250,300,150);

bobObject1= new Bob(350,450,20,20);
bobObject2=new Bob(370,450,20,20);
bobObject3= new Bob(390,450,20,20);
bobObject4=new Bob(410,450,20,20);
bobObject5=new Bob(430,450,20,20);

rope1 = new Rope (bobObject1.body,{x:350,y:450});

rope2= new Rope(bobObject2.body,{x:370,y:450});
rope3 = new Rope(bobObject3.body,{x:390,y:450});
rope4= new Rope(bobObject4.body,{x:410,y:450});
rope5= new Rope(bobObject5.body,{x:430,y:450});
	//Create the Bodies Here.


	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  roof1.display();
  bobObject1.display();
  bobObject2.display();
  bobObject3.display();
  bobObject4.display();
  bobObject5.display();
  rope1.display();
  drawSprites();
 
}



