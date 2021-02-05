class Mango{
    constructor(x,y,radius) {
        var options = {
            isStatic : true,
            restitution : 0,
            friction : 1
            
        }
        this.body = Bodies.circle(x,y,radius/2,options);
        World.add(world, this.body);
        this.radius = radius;
        this.image = loadImage("Images/mango.png");
    }

    display() {
       fill("White");
       push();
       translate(this.body.position.x,this.body.position.y);
       rotate(this.body.angle);
       image(this.image, 0, 0, this.radius);
       pop();
    }
}