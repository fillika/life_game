import {TCell, TOption} from "Scripts/main/ts/types";
import {mainDraw} from "Scripts/main/ts/features/canvas/main-draw";
import {createEmptyField} from "Scripts/main/ts/features/field";
import {CONSTANTS, isNil} from "Scripts/main/ts/utils";
import {findNeighbors} from "Scripts/main/ts/features/cell";
import {game} from "Scripts/main/ts/game";

export const initDraw = (generation: TOption<TCell>[][]) => {
    const newField: TOption<TCell>[][] = createEmptyField(CONSTANTS.fieldSize);
    let logData: string = ""; // для логов

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
                    logData += 1;
                } else {
                    newField[i][j] = undefined;
                    logData += 0;
                }
            } else { // Если жива
                if (aliveCells === 2 || aliveCells === 3) {
                    newField[i][j] = cell;
                    logData += 1;
                } else {
                    newField[i][j] = undefined;
                    logData += 0;
                }
            }
        }
    }


    /**
     * Проверка включает в себя комбинации клеток, в т.ч. если
     * все клетки погибли (В строке будут все нули)
     */
    if (game.log.includes(logData)) {
        mainDraw(generation)
        console.log('GAME OVER. Бесконечный цикл клеток', logData)
        return;
    }

    game.log.push(logData); // Записываем лог в историю
    mainDraw(generation)

    const intervalID = setInterval(() => {
        initDraw(newField)
        clearInterval(intervalID)
    }, CONSTANTS.updateInterval)
}
