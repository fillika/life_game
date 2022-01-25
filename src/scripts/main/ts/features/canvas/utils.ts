type TCoordsProps = {
    x: number,
    y: number,
    w: number,
    h: number
}

export const drawCell = (ctx: CanvasRenderingContext2D, isAlive: boolean, {x, y, w, h}: TCoordsProps) => {
    if (isAlive) {
        ctx.fillStyle = 'rgb(242,104,104)';
        ctx.fillRect(x, y, w, h);
    } else {
        ctx.strokeRect(x, y, w, h)
    }
}