import {TCell, TOption} from "Scripts/main/ts/types";
import {mainDraw} from "Scripts/main/ts/features/canvas/main-draw";
import {createEmptyField} from "Scripts/main/ts/features/field";
import {CONSTANTS, isNil} from "Scripts/main/ts/utils";
import {findNeighbors} from "Scripts/main/ts/features/cell";
import {game} from "Scripts/main/ts/game";

export const initDraw = (generation: TOption<TCell>[][]) => {
    const newField: TOption<TCell>[][] = createEmptyField(CONSTANTS.fieldSize);
    let logData: string = ""; // для логов
    let zeroCounter = 0; // Счетчик нулей для декодирования строки

    // Пройтись циклом по каждой клетке
    for (let i = 0; i < generation.length; i++) {
        const row = generation[i];

        for (let j = 0; j < row.length; j++) {
            const cell = row[j];
            const neighbors = findNeighbors(CONSTANTS.fieldSize, CONSTANTS.fieldSize, i, j);
            let aliveCells = 0;

            // Находим кол-во живых клеток вокруг целевой клетки
            neighbors.forEach(neighbor => {
                !isNil(generation[neighbor.x1][neighbor.x2]) ? aliveCells++ : null;
            })

            // Логика заполнения клеток
            // Если клетка мертва
            if (isNil(cell)) {
                if (aliveCells === 3) {
                    newField[i][j] = {isAlive: true}
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
        console.log('GAME OVER. Бесконечный цикл клеток', logData)
        return;
    }

    game.setLog = logData; // Записываем лог в историю
    mainDraw(generation)

    window.requestAnimationFrame(() => initDraw(newField));
}
