export const CONSTANTS = {
    fieldSize: 5,
    cellsNumber: function(): number {
        return Math.round(this.fieldSize * this.fieldSize / 2.4);
    }
}