class Tree {
    constructor(x,y) {
      var options = {
         isStatic : true
      }
      this.bottomBody = Bodies.rectangle(x,y,400,20,options);
      this.leftBody = Bodies.rectangle(x,y,20,10);
      this.rightBody = Bodies.rectangle(x,y,20,10);
     
      World.add(world, this.bottomBody);
      World.add(world, this.leftBody);
      World.add(world, this.rightBody);
     
      this.image = loadImage("Images/tree.png");
    }
    
    display() {
      imageMode(CENTER);
      image(this.image,this.bottomBody.position.x,this.bottomBody.position.y,600,600);
       
    }
}