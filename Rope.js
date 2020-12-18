class Rope {
    constructor(bodyA,pointB) {
       // this.offsetX = offsetX;
      //  this.offsetY = offsetY;
        var opt = {
            bodyA: bodyA,
            pointB: pointB,
           // pointB: {x:this.offsetX,y:this.offsetY},
            stiffness:0.04
        }
        this.rope = Constraint.create(opt);
        World.add(world,this.rope);
    }

    display() {
        
        var pointA = this.rope.bodyA.position;
        var pointq = this.rope.pointB;
        push();
        
        strokeWeight(2);
      //  fill("white");
        line(pointA.x,pointA.y, pointq.x, pointq.y);
        pop();
    }
}