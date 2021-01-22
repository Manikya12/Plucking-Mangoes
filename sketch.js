
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
var ground1,boy1,tree1,stone1,con1
var mango1,mango2,mango3,mango4,mango5,mango6

function preload()
{ 
	boy1= loadImage("boy.png")
}

function setup() {
	createCanvas(900, 300);


	engine = Engine.create();
	world = engine.world;

	ground1 = new ground(600,height,1200,20)
    tree1= new tree(500,height-300,300,300)
	stone1= new stone(450,150,45)
	
	mango1 = new mango(300,20,40)
	mango2 = new mango(260,50,40)
	mango3 = new mango(300,60,40)
	mango4 = new mango(380,55,40)
	mango5 = new mango(350,30,40)
	mango6= new mango(340,60,40)
	//con1= new con
	con1=new slingShot(stone1.body,{x:130,y:190}); 
    
	Engine.run(engine);
  
}


function draw() {  
  rectMode(CENTER);
  background("grey");
  
  drawSprites();
 ground1.display();
 tree1.display()
 mango1.display()
 mango2.display()
 mango3.display()
 mango4.display()
 mango5.display()
 mango6.display()

 image(boy1,100,140,150,200)

 con1.display()
 stone1.display()

 detectcollision(stone1,mango1)
 detectcollision(stone1,mango2)
 detectcollision(stone1,mango3)
 detectcollision(stone1,mango4)
 detectcollision(stone1,mango5)
 detectcollision(stone1,mango6)
}


function detectcollision(lstone,lmango){
	mbp=lmango.body.position
	sbp=lstone.body.position
	
	var distance=dist(sbp.x,sbp.y,mbp.x,mbp.y)
	if(distance<=lmango.r+lstone.r){
		Matter.Body.setStatic(lmango.body,false)
	}
}
function mouseDragged(){
    Matter.Body.setPosition(stone1.body, {x: mouseX , y: mouseY});
}


function mouseReleased(){
    con1.fly();
}
function keyPressed(){
   if(keyCode===32){
       con1.attach(stone1.body)
   }

}