class stone {
    constructor(x, y, r) {
      var options={
        restitution:0,
        friction:1,
        isStatic:false,
        density:1.2 

      }
      this.r=r
      this.image=loadImage("stone.png")
      this.body = Bodies.circle(x, y, r ,options);
      World.add(world, this.body);
    }
      display(){
        
        var pos =this.body.position;
        push()
        translate(pos.x, pos.y);
        imageMode(CENTER);
        fill(255,0,255);
        image(this.image,0,0,this.r,this.r);
        pop()
      }
    };
