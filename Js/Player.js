class Player {
    constructor(x,y,width,height) {
      var options = {
        restitution: 0.1,
        friction: 0.1,
        density: 0.8,
      }
      this.body = Bodies.rectangle(x,y,width,height,options);
      this.width = width;
      this.image = loadImage("/images/playerog.png");
      this.height = height;
      World.add(world, this.body);
    }
    display(centerMode){
        var pos = this.body.position;
        push();
     // translate(pos.x, pos.y);
      imageMode(CENTER);
      fill("black");
      image(this.image, 0, 0, this.width, this.height);
      pop();
    }
  };