
export default class UI{
    constructor(game){
        this.game = game;
    }

    update(){

    }

    draw(ctx){
        ctx.fillStyle = "#fff";
        ctx.font = "1.5rem ROBOTO";
        ctx.fillText(`Shoots : ${this.game.shoots}`, 25,50)
        ctx.fillText(`Lives : ${this.game.player.lives}`, this.game.width - 120,50)
        if(this.game.gameOver){
            ctx.fillStyle = "#fff"
            ctx.fillRect(this.game.center.x - 100, this.game.center.y - 100, 200,200)
            ctx.save()
            ctx.fillStyle = this.game.shoots > this.game.winScore ? "green" : "red";
            ctx.textAlign = "center"
            ctx.fillText(this.game.shoots > this.game.winScore ? "You won!" :"You Looser!", this.game.center.x , this.game.center.y -20)
            ctx.fillText(`Your best score is ${this.game.shoots}`, this.game.center.x, this.game.center.y)
            ctx.fillText("Tap RETRY btn", this.game.center.x, this.game.center.y + 40)
            ctx.restore()
        }
    }
}