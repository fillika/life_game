import {TCell, TOption} from "Scripts/main/ts/types";
import {createField} from "Scripts/main/ts/features/field";
import {createLog} from "Scripts/main/ts/utils/create-log";
import {CONSTANTS} from "Scripts/main/ts/utils";

interface ILog {
    [key: string]: string | number
}

class Game {
    log: ILog;
    firstGeneration: TOption<TCell>[][];

    canvasWidth: number;
    canvasHeight: number;
    cellWidth: number;
    cellHeight: number;

    ctx: CanvasRenderingContext2D | undefined;

    constructor(fieldSize: number) {
        this.firstGeneration = createField(fieldSize);
        this.log = {
            [createLog(this.firstGeneration)]: 1
        };

        const canvasSide = Math.min(window.innerWidth, window.innerHeight) * 0.95;
        this.canvasWidth = this.canvasHeight = canvasSide;

        this.cellWidth = canvasSide / CONSTANTS.fieldSize
        this.cellHeight = canvasSide / CONSTANTS.fieldSize;
    }

    set setLog(value: string) {
        this.log[value] = 1;
    }

    set setContext(ctx: CanvasRenderingContext2D) {
        this.ctx = ctx;
    }
}

export const game = new Game(CONSTANTS.fieldSize);