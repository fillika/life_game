import {CONSTANTS, isNil} from "Scripts/main/ts/utils";
import {createEmptyField, createField} from "Scripts/main/ts/features/field";
import {renderField} from "Scripts/main/ts/features/render";
import {findNeighbors} from "Scripts/main/ts/features/cell";
import {TCell, TOption} from "Scripts/main/ts/types";

/**
 * todo Рендер должен повторяться в зависимости от условий
 * в пустой (мёртвой) клетке, рядом с которой ровно три живые клетки, зарождается жизнь;
 */

const firstGeneration = createField(CONSTANTS.fieldSize);

function render(generation: TOption<TCell>[][]) {
    const newField: TOption<TCell>[][] = createEmptyField(CONSTANTS.fieldSize);

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
                } else {
                    newField[i][j] = undefined;
                }
            } else { // Если жива
                if (aliveCells === 2 || aliveCells === 3) {
                    newField[i][j] = cell;
                } else {
                    newField[i][j] = undefined;
                }
            }
        }
    }

    renderField(generation)

    const intervalID = setInterval(() => {
        render(newField);
        clearInterval(intervalID)
    }, 1000)
}

render(firstGeneration);