const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;


var score=0;


function preload() {
   
}

function setup(){
    var canvas = createCanvas(1800,800);
    engine = Engine.create();
    world = engine.world;
    Engine.run(engine);
     


    block1=new Box(600,235,30,50);
    block2=new Box(630,235,30,50);
    block3=new Box(660,235,30,50); 
    block4=new Box(690,235,30,50);
    block5=new Box(720,235,30,50);

    block6=new Block(660,195,30,50);
    block7=new Block(630,195,30,50);
    block8=new Block(690,195,30,50);

    block9=new Box(660,155,30,50);
     
    block10=new Box(1200,235,30,50);
    block11=new Box(1230,235,30,50);
    block12=new Box(1260,235,30,50); 
    block13=new Box(1290,235,30,50);
    block14=new Box(1320,235,30,50);

    block15=new Block(1260,195,30,50);
    block16=new Block(1230,195,30,50);
    block17=new Block(1290,195,30,50);
    
    block18=new Box(1260,155,30,50);

    ground2=new Ground(1280,650,290,20);
    ground=new Ground(660,650,200,20);

    ground3=new Ground(660,780,12000,20);

    polygon= new Polygon(50,200,20);

    //World.add(world,polygon);
    
    slingshot = new Slingshot(polygon.body,{x:100, y:200});
    
}

function draw(){
    background("white");

    
    textSize(55)
    fill("red")
    text("SCORE  " + score, width-300, 60)

    //Engine.update(engine);

    block1.display();
    block2.display();
    block3.display();
    block4.display();
    block5.display();

    block6.display();
    block7.display();
    block8.display();
    block9.display();
    block10.display();

    block11.display();
    block12.display();
    block13.display();
    block14.display();
    block15.display();
   
    block16.display();
    block17.display();

    block18.display();

    polygon.display();
   
   

    ground.display();
    ground2.display();
    ground3.display();

    slingshot.display();

    //imageMode(CENTER);
    //image(polygonIMG,polygon.position.x,polygon.position.y,40,40)

    
}


function mouseDragged(){
    Matter.Body.setPosition(polygon.body,{x: mouseX , y: mouseY});
}


function mouseReleased(){
    slingshot.fly();
}

function keyPressed(){
    if (keyCode===32){
        slingshot.attach(polygon.body);
    }
}