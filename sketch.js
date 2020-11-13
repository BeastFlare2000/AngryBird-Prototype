const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var engine, world;
var box1;
var box2;
var ground;
var piggy1;
var log1;
var box3;
var box4;
var piggy2;
var log2;
var box5;
var log3;
var log4;
var red;

function setup(){
    var canvas = createCanvas(1200,400);
    engine = Engine.create();
    world = engine.world;

    box1 = new Box(700,300,70,70);
    box2 = new Box(900,300,70,70);
    ground = new Ground(600,370,1200,20);
    piggy1 = new Pig(800,300);
    log1 = new Log(800,290,300,PI/2);
    box3 = new Box(700,250,70,70);
    box4 = new Box(900,250,70,70);
    piggy2 = new Pig(800,250);
    log2 = new Log(800,240,300,PI/2);
    box5 = new Box(800,160,70,70);
    log3 = new Log(760,120,200,PI/5);
    log4 = new Log(840,120,200,-PI/5);
    red = new Bird(200,200);
}

function draw(){
    background(0);
    Engine.update(engine);
    box1.display();
    box2.display();
    ground.display();
    piggy1.display();
    log1.display();
    box3.display();
    box4.display();
    piggy2.display();
    log2.display();
    box5.display();
    log3.display();
    log4.display();
    red.display();
}