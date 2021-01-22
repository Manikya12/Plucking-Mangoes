class mango {
    constructor(x, y, r) {
      var options={
        isStatic:true,
        restitution:0,
        friction:1, 
      }
      this.r=r
      this.image=loadImage("mango.png")
      this.body = Bodies.circle(x, y, r ,options);
      World.add(world, this.body);
    }
      display(){
        
        var pos =this.body.position;
        push()
        translate(pos.x, pos.y);
        imageMode(CENTER);
        fill(255,0,255);
        image(this.image,this.body.position.x,this.body.position.y,this.r,this.r);
        pop()
      }
    };
