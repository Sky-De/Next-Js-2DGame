


export const DrawCircle = (ctx, radious, x, y, color) => {
    
    return (
        ctx.fillStyle = color,
        ctx.beginPath(),
        ctx.arc(x,y,radious, 0, 2 *Math.PI,false),
        ctx.fill()
        )
}

export const DrawRect = (ctx, x, y, width, height, color) => {
    
    return (
        ctx.fillStyle = color,
        ctx.fillRect(x, y, width, height)
        )
}


