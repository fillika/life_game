import {TCell, TOption} from "Scripts/main/ts/types";
import {isNil} from "Scripts/main/ts/utils/isNil";

export const createLog = (generation: TOption<TCell>[][]): string => {
    let result = '';

    for (let i = 0; i < generation.length; i++) {
        for (let j = 0; j < generation[i].length; j++) {
            const cell = generation[i][j];

            if (isNil(cell)) result += 0;
            else result += 1;
        }
    }

    return result;
}