

class Layer {
        constructor(game, image){
            this.game = game;
            this.image = image;
            this.width = 700;
            this.height = 350;
            this.x = 0;
            this.y = 0;
            this.rotate = 0;
        }

        update(){
            if(this.x <= -this.width) this.x = 0;
            else this.x -= 0.08;
            // if(this.rotate >= 360) this.rotate = 0;
            // else this.rotate += 0.001;
        }

        draw(ctx){
            // ctx.save()
            // ctx.translate(this.game.center.x, this.game.center.y)
            // ctx.rotate(this.rotate)
            // ctx.translate(-this.game.center.x, -this.game.center.y)
            ctx.drawImage(this.image, this.x, this.y, this.width, this.height);
            ctx.drawImage(this.image, this.x + this.width, this.y, this.width, this.height);
            // ctx.restore()
        }

    }

export class Background {
    constructor(game){
        this.game = game;
        this.bgImage = document.querySelector(".bgImage");
        this.bgLayer = new Layer(this.game,this.bgImage)
    }

    update(){
        this.bgLayer.update()
    }
    draw(ctx){
        this.bgLayer.draw(ctx)
    }
}