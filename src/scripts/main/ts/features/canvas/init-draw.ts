import {TOption} from "Scripts/main/ts/types";
import {mainDraw} from "Scripts/main/ts/features/canvas/main-draw";
import {createEmptyField} from "Scripts/main/ts/features/field";
import {isNil} from "Scripts/main/ts/utils";
import {findNeighbors} from "Scripts/main/ts/features/cell";
import {game} from "Scripts/main/ts/game";
import {showFinalWindow} from "Scripts/main/ts/utils/show-final-window";

export const initDraw = (generation: TOption<number | string>[][]) => {
    const newField: TOption<number | string>[][] = createEmptyField(game.fieldSize);
    let logData: string = ""; // для логов
    let zeroCounter = 0; // Счетчик нулей для декодирования строки

    // Пройтись циклом по каждой клетке
    for (let i = 0; i < generation.length; i++) {
        const row = generation[i];

        for (let j = 0; j < row.length; j++) {
            const cell = row[j];
            const neighbors = findNeighbors(game.fieldSize, game.fieldSize, i, j);
            let aliveCells = 0;

            // Находим кол-во живых клеток вокруг целевой клетки
            for (let k = 0; k < neighbors.length; k++) {
                const neighbor = neighbors[k];

                !isNil(generation[neighbor.x1][neighbor.x2])
                    ? aliveCells++
                    : null;

                if (aliveCells > 3) {
                    break;
                }
            }

            // Логика заполнения клеток
            // Если клетка мертва
            if (isNil(cell)) {
                if (aliveCells === 3) {
                    newField[i][j] = 1
                    logData += zeroCounter + 1;
                    zeroCounter = 0;
                } else {
                    newField[i][j] = undefined;
                    zeroCounter++;
                }
            } else { // Если жива
                if (aliveCells === 2 || aliveCells === 3) {
                    newField[i][j] = cell;
                    logData += zeroCounter + 1;
                    zeroCounter = 0;
                } else {
                    newField[i][j] = undefined;
                    zeroCounter++;
                }
            }
        }
    }
    /**
     * Проверка включает в себя комбинации клеток, в т.ч. если
     * все клетки погибли (В строке будут все нули)
     */
    if (!isNil(game.log[logData])) {
        mainDraw(generation)
        showFinalWindow();
        console.log('GAME OVER. Бесконечный цикл клеток', logData)
        return;
    }

    game.setLog = logData; // Записываем лог в историю
    mainDraw(generation)

    window.requestAnimationFrame(() => initDraw(newField));
}
