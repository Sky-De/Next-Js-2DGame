




 class Projectile{
    constructor(game){
        this.game = game;
        this.radious = 5;
        this.width = 10;
        this.height = 10;
        this.x = this.game.center.x - this.width *0.5;
        this.y = this.game.center.y -this.height *0.5 ;
        this.markedForRemove = false;
        this.img = document.querySelector(".projectile");
        this.frameX = 0;
        this.maxFrame = 23;
    }

    update(){
        if(this.frameX < this.maxFrame) this.frameX++
        else this.frameX = 0;

        this.x += this.speedX;
        this.y += this.speedY; 
        if(this.y < 0) this.markedForRemove = true
        if(this.x < 0) this.markedForRemove = true
        if(this.x > this.game.width) this.markedForRemove = true
        if(this.y > this.game.height) this.markedForRemove = true
    }

    draw(ctx){
        ctx.fillStyle = "cyan";
        ctx.fillRect(this.x,this.y,this.width,this.height)
        // ctx.drawImage(this.img, this.width * this.frameX, 0, this.width, this.height,this.x, this.y, this.width, this.height)
    }
}



// topShoot
export class TopProjectile extends Projectile{
    constructor(game){
        super(game);
        this.speedY = -4
        this.speedX = 0
    }
 }


//  bot shoot
export class BotProjectile extends Projectile{
    constructor(game){
        super(game);
        this.speedY = 4
        this.speedX = 0
    }
 }

//  left shoot
export class LeftProjectile extends Projectile{
    constructor(game){
        super(game);
        this.speedY = 0
        this.speedX = -4
    }
 }

//  rightShoot
export class RightProjectile extends Projectile{
    constructor(game){
        super(game);
        this.speedY = 0
        this.speedX = 4
    }
 }