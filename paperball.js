class Paperball{
constructor(x,y,var_options){
this.body=Matter.Bodies.circle(x,y,var_options);
World.add(world,this.body)
}
var_options={
isStatic:false,
restitution:0.3,
friction:0.5,
density:1.2
}
display(){
var pos=this.body.position
ellipseMode();
fill(255)
ellipse(pos.x,pos.x,this.radius)
}
}   

