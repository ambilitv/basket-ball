const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine,world;
var score=0; 

function preload(){
    basketballImage = loadImage("Images/basketball.png");
    courtImage = loadImage("Images/bballcourt.jpg");
}


function setup(){
    createCanvas(1200,600);
    engine = Engine.create();
    world = engine.world;
    ball = new Ball(600,300);
    platform_down= new Platform(600,590,1200,10);
    platform_left= new Platform(550,150,10,50);
    platform_right= new Platform(650,150,10,50)
    player11= new Player(550,300,10,100);
    basket = createSprite(600,200,30,10);
    basket.visible = false
   
    
}


function draw(){
    background(189);
    image(courtImage, 0, 0, width, height);
    Engine.update(engine);
    drawSprites();
    ball.display();
    console.log(ball.body.position.x);
    //platform_player1.display();
    player11.display();
    
    //platform_left.display();
    //platform_right.display();
    platform_down.display();
    textSize(20)
    fill("blue")
    text("score: "+score,1000,100)

    if(ball.body.position.x===600&&ball.body.position.y===100){
        console.log("hit");
    }
    if(collide(ball.body,basket)==true){
        score = score+1
    }
    
}
function keyPressed(){

    if(keyCode===32){
     
        Matter.Body.applyForce(ball.body, ball.body.position, {x:1, y:-90});
       
    }

    //Left Arrow
    if(keyCode===37){
        
        Matter.Body.applyForce(ball.body, ball.body.position, {x:-90, y:0});
    }
    if(keyCode===39){
       
        Matter.Body.applyForce(ball.body, ball.body.position, {x:60, y:0});
        
    }
}
function collide(body,sprite) 
{ if(body!=null) 

{
    //console.log(body.x)
    var d = dist(body.position.x,body.position.y,sprite.position.x,sprite.position.y); 

if(d<10) 
{
    //World.remove(engine.world,fruit); 

//fruit = null; 

return true; } 

else{ return false; } } 
}