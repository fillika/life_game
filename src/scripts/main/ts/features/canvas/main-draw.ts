import {CONSTANTS, isNil} from "Scripts/main/ts/utils";
import {drawCell} from "Scripts/main/ts/features/canvas/utils";
import {TCell, TOption} from "Scripts/main/ts/types";

export const mainDraw = (generation: TOption<TCell>[][]) => {
    const canvas = document.getElementById(CONSTANTS.renderID) as HTMLCanvasElement;

    if (isNil(canvas)) {
        throw new Error(`Canvas с id ${CONSTANTS.renderID} не найден`)
    }

    if (canvas.getContext) {
        const ctx = canvas.getContext('2d');

        const canvasSide = Math.min(window.innerWidth, window.innerHeight) * 0.95;
        canvas.width = canvas.height = canvasSide;

        const cellWidth = canvasSide / CONSTANTS.fieldSize;
        const cellHeight = canvasSide / CONSTANTS.fieldSize;

        if (ctx != null) {
            /**
             *  Кол-во клеток находим за счет перемножения сторон игрового поля
             */
            for (let i = 0; i < generation.length; i++) {
                const row = generation[i];

                for (let j = 0; j < row.length; j++) {
                    const cell = row[j];

                    drawCell(ctx, !isNil(cell), {x: cellWidth * i, y: j * cellHeight, w: cellWidth, h: cellHeight})
                }
            }

        }

        // drawing code here
    } else {
        // canvas-unsupported code here
    }
}