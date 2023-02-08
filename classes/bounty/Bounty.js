

class Bounty{
    constructor(game,position){
        this.game = game;
        this.x = position.x;
        this.y = position.y;
        this.width = 20;
        this.height = 20;
        this.markedForRemove = false;
        this.centerX = this.x + this.width *0.5;
        this.centerY = this.y + this.height *0.5;
        this.name = position.name;
    }
    draw(ctx){
        ctx.fillStyle = this.color;
        ctx.fillRect(this.x, this.y, this.width, this.height);
        ctx.fillStyle = "black"
        ctx.font = "15px ROBOTO"
        ctx.fillText(this.score, this.x, this.y + this.height *0.5);
    }
}




export class Bounty1 extends Bounty{
    constructor(game,position){
        super(game,position);
        this.color = "cyan";
        this.score = 1;
    }
    
}

export class Bounty2 extends Bounty{
    constructor(game,position){
        super(game,position);
        this.color = "gray";
        this.score = 3;
    }
    
}

export class Bounty3 extends Bounty{
    constructor(game,position){
        super(game,position);
        this.color = "orange";
        this.score = 6;
    }
    
}

export class Bounty4 extends Bounty{
    constructor(game,position){
        super(game,position);
        this.color = "purple";
        this.score = 9;
    }
    
}