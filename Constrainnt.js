class Constrainnt{
    constructor(bodyA, pointB) {
        var options = {
            bodyA : bodyA,
            pointB : pointB,
            stiffness : 0.04,
            length : 5
        }

        this.constrainnt = Constraint.create(options);
        World.add(world, this.constrainnt);
        this.pointB = pointB;
       
    }
    
    display() {
        var pointA = this.constrainnt.bodyA.position;
        var pointB = this.pointB;

        line (pointA.x,pointA.y,pointB.x,pointB.y);
        
    }
}