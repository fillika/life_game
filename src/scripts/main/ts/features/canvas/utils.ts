export const drawCell = (ctx: CanvasRenderingContext2D, isAlive: boolean) => {
    if (isAlive) {
        ctx.fillStyle = 'rgb(242,104,104)';
        ctx.fillRect(10, 10, 20, 20);
    } else {
        ctx.strokeRect(10, 10, 20, 20)
    }
}