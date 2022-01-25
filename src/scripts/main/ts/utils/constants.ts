export const CONSTANTS = {
    renderID: 'ts-main-react',
    fieldSize: 15,
    cellsNumber: function(): number {
        return Math.round(this.fieldSize * this.fieldSize / 2.9);
    }
}