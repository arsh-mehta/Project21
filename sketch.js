var canvas;
var music;
var box;
var topEdge,bottomEdge,rightEdge,leftEdge,edges;
var surface1,surface2,surface3,surface4;
var rand;
function preload(){
    music = loadSound("music.mp3");
}

function setup(){
    canvas = createCanvas(800,600);

    rand = Math.round(random(1,4));

    //create 4 different surfaces
    surface1 = createSprite(100,580,185,20);
    surface1.shapeColor = "blue";
    surface2 = createSprite(300,580,185,20);
    surface2.shapeColor = "orange";
    surface3 = createSprite(500,580,185,20);
    surface3.shapeColor = "purple";
    surface4 = createSprite(700,580,185,20);
    surface4.shapeColor = "green";

    //create box sprite and give velocity
    box = createSprite(random(20,750),300,20,20);
    box.setVelocity(8,12);
    box.shapeColor = "white";

    //create edgeSprite
    topEdge = createSprite(windowWidth/2,0,windowWidth,1);
    bottomEdge = createSprite(windowWidth/2,height,windowWidth,1);
    leftEdge = createSprite(0,windowHeight/2,1,windowHeight);
    rightEdge = createSprite(width,windowHeight/2,1,windowHeight);
    edges = createGroup();
    edges.add(topEdge);
    edges.add(bottomEdge);
    edges.add(rightEdge);
    edges.add(leftEdge);
    
}

function draw() {
    background(rgb(169,169,169));
    
    box.bounceOff(edges);

    //add condition to check if box touching surface and make it box

    if(surface1.isTouching(box)){
        box.bounceOff(surface1);
        box.shapeColor = "blue";
        music.stop();
        if(rand===1){
            box.setVelocity(0,0); 
        }
    }
    if(surface2.isTouching(box)){
        box.bounceOff(surface2);
        box.shapeColor = "orange";
        music.play();
        if(rand===2){
            box.setVelocity(0,0);
        }
    }
    if(surface3.isTouching(box)){
        box.bounceOff(surface3);
        box.shapeColor = "purple";
        music.stop();
        if(rand===3){
            box.setVelocity(0,0); 
        }
    }
    if(surface4.isTouching(box)){
        box.bounceOff(surface4);
        box.shapeColor = "green";
        music.play();
        if(rand===4){
            box.setVelocity(0,0); 
        }

    }
    
    drawSprites();
}
