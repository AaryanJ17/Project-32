const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var backgroundImg;

var bg ;

function preload() {
    backgroundImg = loadImage("sunrise1.png",);
}

function setup(){
    var canvas = createCanvas(1200,700);
    engine = Engine.create();
    world = engine.world;

}

function draw(){
    background(backgroundImg);
    Engine.update(engine);
    getTime();



}

async function getBackgroundImg(){
    var response= await fetch ("http://worldtimeapi.org/api/timezone/Asia/Kolkata")
    var responseJson= await response.json();
    var dt=responseJson.datetime
    var hour= dt.slice(11,13)
    //06
    
    if (hour>04 && hour<=06) {
        bg="sunrise1.png"
        
    }
    else if (hour>06 && hour<=08){
        bg="sunrise2.png"
    }
    else if (hour>23 && hour<=0){
        bg="sunset10.png"
    }
    else if (hour==0 && hour<=03){
        bg="sunset11.png"
    }
    else if (hour==0 && hour<=03){
        bg="sunset12.png"
    }
  
     backgroundImg=loadImage(bg);
   

}
