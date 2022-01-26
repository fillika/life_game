import {game} from "Scripts/main/ts/game";
import {initDraw} from "Scripts/main/ts/features/canvas/init-draw";

export const setCanvasSettings = (canvas: HTMLCanvasElement) => {
    if (canvas.getContext) {
        const ctx = canvas.getContext('2d');

        canvas.width = game.canvasSide;
        canvas.height = game.canvasSide;

        if (ctx != null) {
            game.setContext = ctx;
            initDraw(game.firstGeneration!)
        }
    } else {
        // canvas-unsupported code here
    }
}