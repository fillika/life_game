import {TOption} from "Scripts/main/ts/types";
import {createField} from "Scripts/main/ts/features/field";
import {createLog} from "Scripts/main/ts/utils/create-log";

interface ILog {
    [key: string]: string | number
}

class Game {
    log: ILog = {};
    firstGeneration: TOption<string | number>[][] | undefined;
    renderID: string = 'canvas';

    canvasSide: number;
    cellWidth: number = 0;
    cellHeight: number = 0;

    fieldSize: number

    ctx: CanvasRenderingContext2D | undefined;

    constructor() {
        this.fieldSize = 10; // Значение по умолчанию

        this.canvasSide = Math.min(window.innerWidth, window.innerHeight) * 0.95;
    }

    start() {
        this.firstGeneration = createField(this.fieldSize);
        this.log = {
            [createLog(this.firstGeneration)]: 1
        };

        this.cellWidth = this.canvasSide / this.fieldSize;
        this.cellHeight = this.canvasSide / this.fieldSize;
    }

    set setLog(value: string) {
        this.log[value] = 1;
    }

    set setContext(ctx: CanvasRenderingContext2D) {
        this.ctx = ctx;
    }
}

export const game = new Game();