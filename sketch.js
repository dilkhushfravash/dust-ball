
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var ball,leftside,rightside,groundobj;
var radius = 40;
var world;
function setup() {
	createCanvas(1600,700);



	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
   var ball_options={
    isStatic:false,
	restitution:0.3,
    friction:0,
	density:1.2
   }
    
     var ball = Bodies.circle(300,100,radius/2,ball_options)
   World.add(world,ball);

   var groundobj_options={
	   isStatic:true,
	   restitution:0.3,
	   friction:0

   }
   leftside=new ground(1100,600,20,120);
   rightside=new ground(1350,600,20,120);
   groundobj=new ground(width/2,670,width,20);
 
  

	Engine.run(engine);

	fill("blue");
    rectMode(CENTER);
    ellipseMode(RADIUS);
  
}


function draw() {
  rectMode(CENTER);
  background("yellow");
  //rect(groundobj.position.x,groundobj.position.y,1200,20);
  ellipse(ball.position.x,ball.position.y,radius/2,radius/2);
  groundobj.display();
  leftside.display();
  rightside.display();
  drawSprites();
 
}



