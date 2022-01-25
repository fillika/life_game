export const CONSTANTS = {
    renderID: 'canvas',
    fieldSize: 20,
    cellsNumber: function(): number {
        return Math.round(this.fieldSize * this.fieldSize / 3.1);
    }
}