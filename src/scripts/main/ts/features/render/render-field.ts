import {TCell, TOption} from "Scripts/main/ts/types";
import {CONSTANTS, isNil} from "Scripts/main/ts/utils";
import {createAliveCells, createDeadCells} from "Scripts/main/ts/features/render/create-cells";

export const renderField = (field: TOption<TCell>[][]): void => {
    const app = document.getElementById(CONSTANTS.renderID);

    if (isNil(app)) {
        throw new Error(`Отсутствует HTML элемент с ID ${CONSTANTS.renderID}`)
    }

    let result = document.createElement('div');
    result.classList.add('cell-field');

    for (let i = 0; i < field.length; i++) {
        let row = document.createElement('div');
        row.classList.add('cell-row');

        for (let j = 0; j < field[i].length; j++) {
            const cell = field[i][j];

            row.insertAdjacentElement('beforeend', isNil(cell) ? createDeadCells() : createAliveCells())
        }

        result.insertAdjacentElement('afterbegin', row);
    }

    app!.insertAdjacentElement('afterbegin', result);
}