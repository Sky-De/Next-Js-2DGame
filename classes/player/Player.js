
export default class Player{
    constructor(game){
        this.game = game;
        this.width = 25;
        this.height = 25;
        this.radious = 12
        this.y = this.game.center.y - this.height *0.5;
        this.x = this.game.center.x - this.game.spaceShip.radious;
        this.positionName = "LEFT";
        this.speedX = 0;
        this.speedY = 0;
        this.lives = 5;
        this.color = "yellow";
        this.centerX = this.x + this.width *0.5;
        this.centerY = this.y + this.height *0.5;
    }

    update(){
        
    }

    draw(ctx){
        ctx.fillstyle = "red";
        ctx.fillRect(this.x, this.y, this.width, this.height)
        ctx.fillstyle = "white"
        ctx.fillText(this.lives,this.x,this.y)
    }
}