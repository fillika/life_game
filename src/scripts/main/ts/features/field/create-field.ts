import {CONSTANTS} from "Scripts/main/ts/utils";
import {createCells} from "Scripts/main/ts/features/cell";
import {TCell, TOption} from "Scripts/main/ts/types";

export const createField = (size: number): TOption<TCell>[][] => {
    const cells = createCells(CONSTANTS.cellsNumber());

    return fill([], cells, size);
}

function fill(field: TOption<TCell>[][], cells: TCell[], fieldSize: number): TOption<TCell>[][] {
    let counter = fieldSize * fieldSize; // Счетчик кол-ва клеток

    for (let i = 0; i < fieldSize; i++) {
        const row = new Array(fieldSize);

        for (let j = 0; j < fieldSize; j++) {
            /**
             *  Алгоритм случайного распределения клеток.
             *  Пройтись по всему полю, распределяя рандомно клетки
             *  Каждый раз проверять длину массива клеток и кол-во оставшихся клеток.
             */

            if (cells.length === counter) {
                row[j] = cells.pop();
                counter--;
            } else if (cells.length > 0) {
                const chance = Math.random() > 0.67;

                row[j] = chance ? cells.pop() : undefined;
                counter--;
            }
        }

        field.push(row);
    }

    return field;
}