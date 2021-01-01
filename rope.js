class Rope{
    constructor(bodyA,bodyB,offsetX,offsetY){
       
        this.offsetX = offsetX;
        this.offsetY = offsetY;

        option = {
            bodyA : bodyA,
            bodyB : bodyB,
            pointB:{x:this.offsetX, y:this.offsetY}
        }

    
        this.chain = Constrain.create(option);
        World.add(world,this.rope);
    }

    display()
    {
        var pointA = this.chain.bodyA.position;
        var pointB = this.chain.bodyB.position;
        strokeWeight(3);
        line(pointA.x,piontA.y,pointB.x,pointB.y);
    }
}