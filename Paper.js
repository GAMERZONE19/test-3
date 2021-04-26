class Paper{

var options= {

isStatic:false,
restitution:0.3,
fricition:0,
density:1.2,
}
this.image=loadImage("paper.png");

display(){

    
}


function keyPressed(){

    if(keyCode === UP_ARROW){
        Matter.body.applyForce(paperobject.body,paperobject.body.position{x:130,y:145});
    }
}



}