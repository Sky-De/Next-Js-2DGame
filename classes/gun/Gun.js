export default class Gun{
    constructor(game){
        this.game = game;
        this.width = 60;
        this.height = 25;
        this.x = this.game.center.x -this.width *0.5;
        this.y = this.game.center.y -this.height *0.5;
        this.speedX = 3;
        this.speedY = 5;
        this.angle = 0;
        this.radious = 5;
        this.timer = 0;
        this.interval = 2000;
        this.shoots = 0;
    }

    update(){
        if(this.timer === 0){
            this.game.shoot(2000)
            this.timer = 1
        }   
    }

    draw(ctx){
        ctx.save()
        ctx.translate(this.game.center.x, this.game.center.y)
        ctx.rotate(this.angle * Math.PI / 180 )
        ctx.translate(-this.game.center.x, -this.game.center.y)
        ctx.beginPath()
        ctx.fillStyle = "red"
        ctx.arc(this.x, this.y + this.height *0.5, this.radious,0, 2 *Math.PI,false)
        ctx.fill()
        ctx.beginPath()
        ctx.fillStyle = "orange"
        ctx.arc(this.x + this.width, this.y + this.height *0.5, this.radious,0, 2 *Math.PI,false)
        ctx.fill()
        ctx.fillStyle = "blue"
        ctx.fillRect(this.x, this.y, this.width, this.height)
        ctx.restore()
    }
}