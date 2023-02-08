class Target{
    constructor(game,position){
        this.game = game;
        this.width = 50;
        this.height = 50;
        this.radius = 50;
        this.x = position.x;
        this.y = position.y;
        this.timer = 0;
        this.interval = 1500;
        this.frameX = 0;
        this.maxFrameX  = 19;
        this.frame = 0;
        this.maxFrame  = 3;
    }

    update(){
        if(this.frame < this.maxFrame) this.frame++
        else{
            if(this.frameX < this.maxFrameX) this.frameX++
            else this.frameX = 0;
            this.frame = 0;
        }
        
    }

    
    draw(ctx){
        // ctx.fillStyle = this.color ? this.color : "black";
        // ctx.fillRect(this.x, this.y, this.width, this.height);
        // ctx.fillStyle = "white";
        // ctx.fillText(this.score,this.x + 20,this.y + 20);
        ctx.drawImage(this.img, this.width * this.frameX, 0, this.width, this.height,this.x, this.y, this.width, this.height)
    }
}


export class targetType1 extends Target{
    constructor(game,position){
        super(game,position)
        this.color = "black"
        this.game = game;
        this.score = -25;
        this.img = document.querySelector(".targetBlack");
    }
}
export class targetType2 extends Target{
    constructor(game,position){
        super(game,position)
        this.score = 1;
        this.color = "green"
        this.game = game;
        this.img = document.querySelector(".targetGreen");
    }
}
export class targetType3 extends Target{
    constructor(game,position){
        super(game,position)
        this.score = -15;
        this.color = "purple"
        this.game = game;
        this.img = document.querySelector(".targetPurple");
    }
}
export class targetType4 extends Target{
    constructor(game,position){
        super(game,position)
        this.score = -10;
        this.color = "red"
        this.game = game;
        this.img = document.querySelector(".targetRed");
    }
}