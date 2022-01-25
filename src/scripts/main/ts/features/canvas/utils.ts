type TCoordsProps = {
    x: number,
    y: number,
    w: number,
    h: number
}

export const drawCell = (ctx: CanvasRenderingContext2D, {x, y, w, h}: TCoordsProps) => {
    ctx.fillStyle = 'rgb(242,104,104)';
    ctx.fillRect(x, y, w, h);
}