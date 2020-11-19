const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var boy;
var stone1;
var tree
var mango1,mango2,mango3,mango4,mango5,mango6;
var line1;
var ground;

function preload(){	
}

function setup() {

	createCanvas(900,600);

	engine = Engine.create();
  world = engine.world;
  
  ground = Bodies.rectangle(455, 560, 910, 30, {isStatic:true} );
  World.add(world,ground);

  stone1 = new Stone(90,420,30);
  boy = new Boy(150,470);
  tree = new Tree();

  mango1 = new Mango(550,300,30);
  mango2 = new Mango(620,270,30);
  mango3 = new Mango(690,280,30);
  mango4 = new Mango(760,250,30);
  mango5 = new Mango(700,200,30);
  mango6 = new Mango(620,210,30);

  line1 = new Chain(stone1.body,{x:90,y:415});
Engine.run(engine);
}


function draw() {

  // rectMode(CENTER);
  background("lavender");

  stone1.display();
  boy.display();
  tree.display();

  mango1.display();
  mango2.display();
  mango3.display();
  mango4.display();
  mango5.display();
  mango6.display();

  line1.display();

  // rectMode(CENTER);
  // noStroke();
  // rect(ground.position.x,ground.position.y,910,30);
  detectollision(stone1,mango1);
  detectollision(stone1,mango2);
  detectollision(stone1,mango3);
  detectollision(stone1,mango4);
  detectollision(stone1,mango5);
  detectollision(stone1,mango6);
  // detectollision(stone1,mango7);
  // detectollision(stone1,mango8);
  // detectollision(stone1,mango9);
  // detectollision(stone1,mango10);
  // detectollision(stone1,mango11);
  // detectollision(stoneObj,mango12);
 
}

function mouseDragged(){
  Matter.Body.setPosition(stone1.body,{x:mouseX,y:mouseY});
}

function mouseReleased(){
  line1.fly();
}


function detectollision(lstone,lmango){
	/*var collision = Matter.SAT.collides(lstone,lmango);
	if(collision.collided){
		console.log("collided");
		Matter.Body.setStatic(lmango,false);	
	}*/
  mangoBodyPosition=lmango.body.position
  stoneBodyPosition=lstone.body.position
 // console.log("hello");
  var distance=dist(stoneBodyPosition.x, stoneBodyPosition.y, mangoBodyPosition.x, mangoBodyPosition.y)
  //console.log(distance)
 // console.log(lmango.r+lstone.r)
  	if(distance<=lmango.r+lstone.r)
    {
      console.log(lmango.body);
  	  Matter.Body.setStatic(lmango.body,false);
    }

  }

