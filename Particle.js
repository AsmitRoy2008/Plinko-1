class Particle 
{
    constructor(x,y)
    {
        var options = 
        {
            "restituition": 0.8,
            
        }

        this.r = 10;
        this.body = Bodies.circle(x,y,10, options);
        this.color = color(random(0,255), random(0,255), random(0,225));
        

       
        World.add(world, this.body);
    }

    display()
    {
        var pos = this.body.position;
        var angle = this.body.angle;

        push();
        translate(pos.x, pos.y);
        rotate(angle);
        noStroke();
        ellipseMode(RADIUS);
        ellipse(0,0,this.r,this.r);
        pop();
    }
}