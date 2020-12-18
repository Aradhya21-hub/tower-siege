class Polygon{
  constructor(x,y,radius){
      var options={
        isStatic:true,
          'restitution':0.8,
          'friction':0.0,
          'density':0.0,
          
      }
      this.image=loadImage('polygon.png');
      this.body = Bodies.circle(x,y,50,options);
      this.radius = 50;
  
      

      World.add(world, this.body);
      
  }
  display(){
      var pos=this.body.position;
      var angle = this.body.angle;
      push();
      translate(pos.x,pos.y);
      rotate(angle);
      
      fill("purple")
      image(this.image,0,0,this.radius,this.radius);
      pop();
  }
};