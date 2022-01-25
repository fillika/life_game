import {CONSTANTS, isNil} from "Scripts/main/ts/utils";
import {drawCell} from "Scripts/main/ts/features/canvas/utils";

export const initDraw = () => {
    const canvas = document.getElementById(CONSTANTS.renderID) as HTMLCanvasElement;

    if (isNil(canvas)) {
        throw new Error(`Canvas с id ${CONSTANTS.renderID} не найден`)
    }

    if (canvas.getContext) {
        const ctx = canvas.getContext('2d');

        const canvasSide = Math.min(window.innerWidth, window.innerHeight);
        canvas.width = canvas.height = canvasSide * 0.95;

        if (ctx != null) {

            // TODO Нарисовать клетки


            drawCell(ctx, true)
        }

        // drawing code here
    } else {
        // canvas-unsupported code here
    }
}
