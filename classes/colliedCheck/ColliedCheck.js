

const CheckCollied = (projectile,target) => {
    const {x:x1,y:y1,width:w1,height:h1} = projectile;
    const {x:x2,y:y2,width:w2,height:h2} = target;
    const pro = {
        p1:{
            x: x1,
            y: y1
        },
        p2:{
            x: x1 + w1,
            y: y1
        },
        p3:{
            x: x1 + w1,
            y: y1 + h1
        },
        p4:{
            x: x1,
            y: y1 + h1
        }
    }
    const tar = {
        p1:{
            x: x2,
            y: y2
        },
        p2:{
            x: x2 + w2,
            y: y2
        },
        p3:{
            x: x2 + w2,
            y: y2 + h2
        },
        p4:{
            x: x2,
            y: y2 + h2
        }
    }

return pro.p1.y > tar.p1.y && pro.p1.x > tar.p1.x && 
       pro.p2.y > tar.p2.y && pro.p2.x < tar.p2.x &&
       pro.p4.y < tar.p4.y && pro.p4.x > tar.p4.x &&
       pro.p3.y < tar.p3.y && pro.p3.x < tar.p3.x
    
}

export default CheckCollied;