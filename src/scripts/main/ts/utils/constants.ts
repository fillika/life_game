export const CONSTANTS = {
    renderID: 'canvas',
    fieldSize: 100,
    cellsNumber: function (): number {
        return Math.round(this.fieldSize * this.fieldSize / 3.1);
    }
}