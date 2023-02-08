import InputHandler from "../inputHandler/InputHandler";
import SpaceShip from "../spaceship/Spaceship";
import Player from "../player/Player";
import Gun from "../gun/Gun";
import UI from "../UI/Ui";
import { TopProjectile, BotProjectile, LeftProjectile, RightProjectile } from "../projectile/Projectile";
import { targetType1, targetType2, targetType3, targetType4 } from "../targets/Target"; 
import CheckCollied from "../colliedCheck/ColliedCheck";
import { Bounty1, Bounty2, Bounty3, Bounty4 } from "../bounty/Bounty";
import { Background } from "../background/Background";

export default class Game {
    constructor(width,height){
        this.gameOver = false;
        this.winScore = 30;
        this.width = width;
        this.height = height;
        this.shootInterval = 2000;
        this.minShootInterval = 500;
        this.shoots = 0;
        this.score = 0;
        this.center = {
            x:this.width *0.5,
            y:this.height *0.5
        }
        this.inputHandler = new InputHandler(this);
        this.spaceShip = new SpaceShip(this);
        this.player = new Player(this);
        this.gun = new Gun(this);
        this.Ui = new UI(this)
        this.Bg = new Background(this);

        //instance for acces to heigh and width of bounty and target
        this.targetSample = new targetType1(this,{x:0,y:0})
        this.bountySample = new Bounty1(this,{x:0,y:0})
        this.targetWidth = this.targetSample.width;
        this.targetHeight = this.targetSample.height;
        this.bountytWidth = this.bountySample.width;
        this.bountytHeight = this.bountySample.height;

        this.projectiles = [];
        this.playerPosition = [
            {
                    x : this.center.x - this.player.width *0.5,
                    y : this.center.y - this.spaceShip.height *0.5,
                    positionName: "TOP"
            },
            {
                x: this.center.x - this.player.width *0.5,
                y: this.center.y + this.spaceShip.height *0.5 - this.player.height,
                positionName: "BOT"
            },
            {
                x: this.center.x - this.spaceShip.width *0.5,
                y: this.center.y - this.player.height *0.5,
                positionName: "LEFT"
            },
            {
                x: this.center.x + this.spaceShip.width *0.5 - this.player.width,
                y: this.center.y - this.player.height *0.5,
                positionName: "RIGHT"
            }
        ]
        this.targetPosition = [
            {
                x : this.center.x -this.targetWidth *0.5,
                y : 0,
            },
            {
                x : this.center.x - this.targetWidth *0.5,
                y : this.height - this.targetHeight,
            },
            {
                x : 0,
                y : this.height *0.5 -this.targetHeight *0.5,
            },
            {
                x : this.width - this.targetWidth,
                y : this.height *0.5 -this.targetHeight *0.5,
            }]
        this.bountyPostion = [
            {
                x: this.center.x - this.player.width *0.5 + ((this.player.width - this.bountytWidth) *0.5),
                y: this.center.y - this.spaceShip.height *0.5 + ((this.player.height - this.bountytHeight) *0.5),
                name: "TOP"
            },
            {
                x: this.center.x - this.player.width *0.5 + ((this.player.width - this.bountytWidth) *0.5),
                y: this.center.y + this.spaceShip.height *0.5 - this.player.height + ((this.player.height - this.bountytHeight) *0.5),
                name: "BOT"
            },
            {
                x: this.center.x - this.spaceShip.width *0.5 + ((this.player.width - this.bountytWidth) *0.5),
                y:this.center.y - this.player.height *0.5 + ((this.player.height - this.bountytHeight) *0.5),
                name: "LEFT"
                
            },
            {
                x: this.center.x + this.spaceShip.width *0.5 - this.player.width + ((this.player.width - this.bountytWidth) *0.5),
                y:this.center.y - this.player.height *0.5 + ((this.player.height - this.bountytHeight) *0.5),   
                name: "RIGHT"   
            }
        ]
        this.targets = [
        new targetType1(this,this.targetPosition[0],"top"),
        new targetType2(this,this.targetPosition[1],"bot"),
        new targetType3(this,this.targetPosition[2],"left"),
        new targetType4(this,this.targetPosition[3],"right")
        ];
        this.bounties = []
    }

    update(){
        this.Bg.update();
        this.spaceShip.update();
        this.player.update();
        this.gun.update();
        this.projectiles.forEach((projectile) => projectile.update());
        this.targets.forEach((target) => target.update());

        // projectile hits target
        this.projectiles.forEach((projectile) => {
            this.targets.forEach((target) => {
                if(CheckCollied(projectile,target)){
                    projectile.markedForRemove = true;
                    this.player.lives += target.score;
                    if(this.player.lives < 0) this.gameOver = true;
                    this.targets = [];
                    this.createTarget()
                    if(this.shootInterval > this.minShootInterval) this.shootInterval -= 100;
                    this.shoot(this.shootInterval)
                }
            })
            
        })

        // remove projectiles
        this.projectiles = this.projectiles.filter((projectile) => !projectile.markedForRemove);

        //projectile and player 
        this.projectiles.forEach((projectile) => {
            if(CheckCollied(projectile,this.player)){
                projectile.markedForRemove = true;
                if(this.player.lives > 0){
                    this.player.lives--
                    this.createTarget()
                    if(this.shootInterval > this.minShootInterval) this.shootInterval -= 100;
                    this.shoot(this.shootInterval)
                }else{
                    this.player.lives = 0;
                    this.gameOver = true;
                }
            }
        })

        //player got bounty
        this.bounties.forEach((bounty) => {
            if(bounty.name == this.player.positionName){
                this.player.lives += bounty.score
                this.bounties = [];
            }
        })
    }
    
    draw(ctxPlayer,ctxGun,ctxSpaceShip,ctxProjectile,ctxTarget,ctxBounty,ctxUi,ctxBg){
        this.Bg.draw(ctxBg)
        this.spaceShip.draw(ctxSpaceShip);
        this.player.draw(ctxPlayer);
        this.gun.draw(ctxGun);
        this.projectiles.forEach((projectile) => projectile.draw(ctxProjectile));
        this.targets.forEach(target => target.draw(ctxTarget))
        this.bounties.forEach((bounty) => bounty.draw(ctxBounty))
        this.Ui.draw(ctxUi);
        
    }

    shoot(interval){
        setTimeout(()=> {

                switch (this.gun.angle) {

                case 0:
                this.projectiles.push(new LeftProjectile(this))
                break;

                case 90:
                this.projectiles.push(new TopProjectile(this))
                break;

                case 180:
                this.projectiles.push(new RightProjectile(this))
                break;

                case 270:
                this.projectiles.push(new BotProjectile(this))  
                break;
        
            default:
                break;
        }
                    this.shoots++
                    },interval)   
    }

    createTarget(){
        this.targets = [];
        this.bounties = [];
        // make target/bounty to have uniqe and random postion in every creation
        // arr1 for targets
        let arr1 = [0,1,2,3]
        // arr2 for bounty
        let arr2 = [0,1,2,3]

        // finds player postion and prevent bounty creation in player postion
        switch (this.player.positionName) {
            case "TOP":
                arr2.shift()
                break;
            case "RIGHT":
                arr2.pop()
                break;
            case "LEFT":
                arr2.splice(2,1)
                break;
            case "BOT":
                arr2.splice(1,1)
                break;
            default:
                break;
        }
        //shuffle arr for random position for target and bounty
        arr1.sort(() => Math.random() - 0.5);    
        arr2.sort(() => Math.random() - 0.5);    
        // create targets
        this.targets.push(new targetType1(this,this.targetPosition[arr1[0]]))
        this.targets.push(new targetType2(this,this.targetPosition[arr1[1]]))
        this.targets.push(new targetType3(this,this.targetPosition[arr1[2]]))
        this.targets.push(new targetType4(this,this.targetPosition[arr1[3]])) 
        
        // bounty creation logic
        let randomizeBounty = Math.random();
        if(randomizeBounty < 0.10) this.bounties.push(new Bounty4(this, this.bountyPostion[arr2[0]]));
        if(randomizeBounty >= 0.25 && randomizeBounty < 0.35) this.bounties.push(new Bounty2(this, this.bountyPostion[arr2[0]]));
        if(randomizeBounty >= 0.45 && randomizeBounty <0.55) this.bounties.push(new Bounty3(this, this.bountyPostion[arr2[0]]));
        if(randomizeBounty >= 0.75 ) this.bounties.push(new Bounty1(this, this.bountyPostion[arr2[0]]));
            
    }
   
}