import { useEffect, useRef, useState } from "react";
import Game from "./game/Game";
import styles from '../styles/GameEngine.module.scss';

const GameEngine = () => {


  const [retry,setRetry] = useState(false);
  //first canvas for single // all for multi cannvas
  const canvas1 = useRef();
  const canvasGun = useRef();
  const canvasSpaceShip = useRef();
  const canvasProjectile = useRef();
  const canvasTarget = useRef();
  const canvasBounty = useRef();
  const canvasUi = useRef();
  const canvasBg = useRef();


  const retryHandle = () => {
    window.location.reload()
  }

  
  useEffect(()=>{
      const game = new Game( canvas1.current.width, canvas1.current.height);
      // single canvas
      // const ctx = canvas1.current.getContext("2d");


      // multi canvas
      const ctxPlayer = canvas1.current.getContext("2d");
      const ctxGun = canvasGun.current.getContext("2d");
      const ctxSpaceShip = canvasSpaceShip.current.getContext("2d");
      const ctxProjectile = canvasProjectile.current.getContext("2d");
      const ctxTarget = canvasTarget.current.getContext("2d");
      const ctxBounty = canvasBounty.current.getContext("2d");
      const ctxUi = canvasUi.current.getContext("2d");
      const ctxBg = canvasBg.current.getContext("2d");
      // console.log(game);
      function animate(){
        
        // single canvas
        // ctx.clearRect(0,0,canvas1.current.width,canvas1.current.height);

        // multi canvas
        ctxPlayer.clearRect(0,0,canvas1.current.width,canvas1.current.height)
        ctxGun.clearRect(0,0,canvas1.current.width,canvas1.current.height)
        ctxProjectile.clearRect(0,0,canvas1.current.width,canvas1.current.height)
        ctxTarget.clearRect(0,0,canvas1.current.width,canvas1.current.height)
        ctxSpaceShip.clearRect(0,0,canvas1.current.width,canvas1.current.height)
        ctxBounty.clearRect(0,0,canvas1.current.width,canvas1.current.height)
        ctxUi.clearRect(0,0,canvas1.current.width,canvas1.current.height)
        ctxBg.clearRect(0,0,canvas1.current.width,canvas1.current.height)
        
        // multi canvas
        game.draw(ctxPlayer,ctxGun,ctxSpaceShip,ctxProjectile,ctxTarget,ctxBounty,ctxUi,ctxBg)
        // single canvas
        // game.draw(ctx)
        if(game.gameOver) {
        setRetry(true)
        return
        }
        game.update()
        requestAnimationFrame(animate)
      }
      // document.querySelector("#startBtn").addEventListener("click", () => {
      //   animate();
      //   setStarted(true)
      // })
      animate()
      
    },[]) 

  return (<>
          <section className={styles.canvasCon}>
               {/* first-line for single canvas---first line in addition below canvases for multi canvas */}
               <canvas className={styles.canvasPlayer} width={350} height={350} ref={canvas1}></canvas>
               <canvas className={styles.canvasGun} width={350} height={350} ref={canvasGun}></canvas>
               <canvas className={styles.canvasSpaceShip} width={350} height={350} ref={canvasSpaceShip}></canvas>
               <canvas className={styles.canvasProjectile} width={350} height={350} ref={canvasProjectile}></canvas>
               <canvas className={styles.canvasTarget} width={350} height={350} ref={canvasTarget}></canvas>
               <canvas className={styles.canvasBounty} width={350} height={350} ref={canvasBounty}></canvas>
               <canvas className={styles.canvasUi} width={350} height={350} ref={canvasUi}></canvas>
               <canvas className={styles.canvasBG} width={350} height={350} ref={canvasBg}></canvas>
               <img style={{display:"none"}} src='./targetBlack.png' className="targetBlack"/>
               <img style={{display:"none"}} src='./targetRed.png' className="targetRed"/>
               <img style={{display:"none"}} src='./targetPurple.png' className="targetPurple"/>
               <img style={{display:"none"}} src='./targetGreen.png' className="targetGreen"/>
               <img style={{display:"none"}} src='./projectile.png' className="projectile"/>
               <img style={{display:"none"}} src='./space.jpg' className="bgImage"/>
          </section>
          
          {/* {!started && <button id="startBtn" className={styles.startBtn}>start</button> } */}
          {retry && <button id="retrytBtn" onClick={retryHandle} className={styles.startBtn}>retry</button> }
          <div className={styles.gunControl}>
            gun
            <button className="btnGun" name="TOP" >up</button>
            <button className="btnGun" name="LEFT" >left</button>
            <button className="btnGun" name="RIGHT" >right</button>
            <button className="btnGun" name="BOT" >down</button>
          </div>
          <div className={styles.playerControl}>
            player
            <button className="btnPlayer" name="TOP" >up</button>
            <button className="btnPlayer" name="LEFT" >left</button>
            <button className="btnPlayer" name="RIGHT" >right</button>
            <button className="btnPlayer" name="BOT" >down</button>
          </div>       
  </>
  )
}

export default GameEngine