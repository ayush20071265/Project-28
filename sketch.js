const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;

var ground1;
var boyImg;
var tree1;
var stone1;
var mango1, mango2, mango3, mango4, mango5, mango6, mango7;

function preload() {
  boyImg = loadImage("Images/boy.png");
  
}

function setup() {
	createCanvas(1600, 740);
    
	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
  ground1 = new Ground(800,735,1600,4);
  stone1 = new Stone(230,616,50,50);

  mango1 = new Mango(500,200,2);
  
  tree1 = new Tree(1000,460);

	Engine.run(engine); 
}


function draw() {
  rectMode(CENTER);
  background(0);
  
  image(boyImg,200,581,200,200);
  

  ground1.display();
  stone1.display();

  mango1.display();

  tree1.display();

  drawSprites();
}



