import {CONSTANTS, isNil} from "Scripts/main/ts/utils";
import {createEmptyField, createField} from "Scripts/main/ts/features/field";
import {renderField} from "Scripts/main/ts/features/render";
import {findNeighbors} from "Scripts/main/ts/features/cell";
import {TCell, TOption} from "Scripts/main/ts/types";
import {createLog} from "Scripts/main/ts/utils/create-log";
import {initDraw} from "Scripts/main/ts/features/canvas";

/**
 * todo Рендер должен повторяться в зависимости от условий
 * в пустой (мёртвой) клетке, рядом с которой ровно три живые клетки, зарождается жизнь;
 */

const firstGeneration = createField(CONSTANTS.fieldSize);
const log: string[] = [createLog(firstGeneration)];

function render(generation: TOption<TCell>[][]) {
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
    if (log.includes(logData)) {
        renderField(generation);
        console.log('GAME OVER. Бесконечный цикл клеток', logData)
        return;
    }

    log.push(logData); // Записываем лог в историю
    renderField(generation)

    const intervalID = setInterval(() => {
        render(newField);
        clearInterval(intervalID)
    }, 1000)
}

initDraw();

// render(firstGeneration);