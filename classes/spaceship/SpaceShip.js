




export default class SpaceShip{
    constructor(game){
        this.game = game;
        this.width = 200;
        this.height = 200;
        this.radious = 100

    }

    update(){

    }

    draw(ctx){
        ctx.fillStyle = "#fff";
        ctx.fillRect(this.game.center.x - this.width *0.5, this.game.center.y - this.height *0.5, this.width, this.height)
    }
}