import {isNil} from "Scripts/main/ts/utils";
import {drawCell} from "Scripts/main/ts/features/canvas/utils";
import {TOption} from "Scripts/main/ts/types";
import {game} from "Scripts/main/ts/game";

export const mainDraw = (generation: TOption<string | number>[][]) => {
    if (game.ctx != undefined) {
        game.ctx.clearRect(0, 0, window.innerWidth, window.innerHeight);
    }

    for (let i = 0; i < generation.length; i++) {
        const row = generation[i];

        for (let j = 0; j < row.length; j++) {
            const cell = row[j];

            if (game.ctx != undefined) {
                !isNil(cell) && drawCell(game.ctx, {
                    x: game.cellWidth * i,
                    y: j * game.cellHeight,
                    w: game.cellWidth,
                    h: game.cellHeight
                })
            }
        }
    }


}