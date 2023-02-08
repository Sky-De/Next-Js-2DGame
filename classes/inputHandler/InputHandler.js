

export default class InputHandler{
    constructor(game){
        this.game = game;
        this.gunDir = "LEFT"


        
        // using buttons on screen/Player
        document.querySelectorAll(".btnPlayer").forEach((elm) => {
            elm.addEventListener("click" , (e) => {
                switch (e.target.name) {

                    case "TOP":
                    this.game.player.positionName = "TOP"
                    this.game.player.x = this.game.playerPosition[0].x;
                    this.game.player.y = this.game.playerPosition[0].y;
                    break;

                    case "BOT":
                    this.game.player.positionName = "BOT"
                    this.game.player.x = this.game.playerPosition[1].x;
                    this.game.player.y = this.game.playerPosition[1].y;
                    break;

                    case "LEFT":
                    this.game.player.positionName = "LEFT"
                    this.game.player.x = this.game.playerPosition[2].x;
                    this.game.player.y = this.game.playerPosition[2].y;
                    break;

                    case "RIGHT":
                    this.game.player.positionName = "RIGHT"
                    this.game.player.x = this.game.playerPosition[3].x;
                    this.game.player.y = this.game.playerPosition[3].y;
                    break;

                default:
                    break;
            }
            })
        })
        // using buttons on screen/GUN
        document.querySelectorAll(".btnGun").forEach((elm) => {
            elm.addEventListener("click" , (e) => {
                switch (e.target.name) {
                case "TOP":
                    this.game.gun.angle = 90;
                    break;
                case "BOT":
                    this.game.gun.angle = 270;
                    break;
                case "LEFT":
                    this.game.gun.angle = 0;
                    break;
                case "RIGHT":
                    this.game.gun.angle = 180;
                    break;
                case " ":
                    console.log("space");
                    break;
                default:
                    break;
            }
            })
        })
        
       
        // using keyBoard
        window.addEventListener("keydown",(e) => {
            if(this.game.gameOver) return
            switch (e.key) {
                case "w":
                    this.game.gun.angle = 90;
                    break;
                case "s":
                    this.game.gun.angle = 270;
                    break;
                case "a":
                    this.game.gun.angle = 0;
                    break;
                case "d":
                    this.game.gun.angle = 180;
                    break;
                case " ":
                    console.log("space");
                    break;
                default:
                    break;
            }

            switch (e.key) {
                
                    case "ArrowUp":
                    this.game.player.positionName = "TOP"
                    this.game.player.x = this.game.playerPosition[0].x;
                    this.game.player.y = this.game.playerPosition[0].y;
                    break;

                    case "ArrowDown":
                    this.game.player.positionName = "BOT"
                    this.game.player.x = this.game.playerPosition[1].x;
                    this.game.player.y = this.game.playerPosition[1].y;
                    break;

                    case "ArrowLeft": 
                    this.game.player.positionName = "LEFT"
                    this.game.player.x = this.game.playerPosition[2].x;
                    this.game.player.y = this.game.playerPosition[2].y;
                    break;

                    case "ArrowRight":
                    this.game.player.positionName = "RIGHT"
                    this.game.player.x = this.game.playerPosition[3].x;
                    this.game.player.y = this.game.playerPosition[3].y;
                    break;

                default:
                    break;
            }
           
        })
        window.addEventListener("keyup",(e) => {
            // console.log(e.key);
        })
        
    }
}