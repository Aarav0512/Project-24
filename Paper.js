class Paper{
    constructor(x,y,r){
        var options = {
            isStatic : false,
            restitution : 0.3,
            friction : 0.5,
            density : 3
        }
    this.body = Matter.Bodies.circle(x,y,r,options)
    this.r = r
    World.add(world,this.body);
    }

    display(){
        ellipseMode(RADIUS);
        var pos = this.body.position
        push()
        translate(pos.x,pos.y)
        strokeWeight(3)  
        stroke("orange") 
        fill("blue")
        ellipse(0,0,this.r,this.r);
        pop()  
    }

}