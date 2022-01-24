import {CONSTANTS} from "Scripts/main/ts/utils";
import {createCells} from "Scripts/main/ts/features/cell";
import {TCell, TOption} from "Scripts/main/ts/types";

export const createField = (size: number): TOption<TCell>[][] => {
    const result = [];

    let counter = size * size; // Счетчик кол-ва клеток

    const cells = createCells(CONSTANTS.cellsNumber());

    console.log('Кол-во клеток', cells.length)

    for (let i = 0; i < size; i++) {
        const row = new Array(size);

        for (let j = 0; j < size; j++) {
            /**
             *  Алгоритм случайного распределения клеток.
             *  Пройтись по всему полю, распределяя рандомно клетки
             *  Каждый раз проверять длину массива клеток и кол-во оставшихся клеток.
             */

            if (cells.length === counter) {
                row[j] = cells.pop();
                counter--;
            } else if (cells.length > 0) {
                const chance = Math.random() > 0.5;

                row[j] = chance ? cells.pop() : undefined;
                counter--;
            }
        }

        result.push(row);
    }

    return result;
}