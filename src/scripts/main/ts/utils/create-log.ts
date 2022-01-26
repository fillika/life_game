import {TOption} from "Scripts/main/ts/types";
import {isNil} from "Scripts/main/ts/utils/isNil";

export const createLog = (generation: TOption<number | string>[][]): string => {
    let result = '';
    let zeroCounter = 0;

    for (let i = 0; i < generation.length; i++) {
        for (let j = 0; j < generation[i].length; j++) {
            const cell = generation[i][j];

            if (isNil(cell)) zeroCounter++;
            else {
                result += 1
                zeroCounter = 0;
            }
        }
    }

    return result;
}