import {game} from "Scripts/main/ts/game";
import {CONSTANTS, isNil} from "Scripts/main/ts/utils";
import {initDraw} from "Scripts/main/ts/features/canvas";

// Запуск приложения

function start() {
    const canvas = document.getElementById(CONSTANTS.renderID) as HTMLCanvasElement;

    if (isNil(canvas)) {
        throw new Error(`Canvas с id ${CONSTANTS.renderID} не найден`)
    }

    if (canvas.getContext) {
        const ctx = canvas.getContext('2d');

        canvas.width = game.canvasWidth;
        canvas.height = game.canvasHeight;

        if (ctx != null) {
            game.setContext = ctx;
            initDraw(game.firstGeneration);
        }

        // drawing code here
    } else {
        // canvas-unsupported code here
    }
}

window.requestAnimationFrame(start);