class slingShot{
  constructor(body1,point2){
   var options={
       bodyA:body1,
       pointB:point2,
       length:10,
       stiffness:0.04
   }
   this.constrain=Matter.Constraint.create(options)
   World.add(world,this.constrain)
   this.pointB=point2
  }
  display(){
    if(this.constrain.bodyA){
  
    
      var pointA=this.constrain.bodyA.position;
      var pointB=this.pointB
      strokeWeight(3)
      line(pointA.x,pointA.y,pointB.x,pointB.y)
    }
  }
  attach(body){
    this.constrain.bodyA = body;
}

  fly(){
    this.constrain.bodyA=null 
  }
}