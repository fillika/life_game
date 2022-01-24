import {TCell} from "Scripts/main/ts/types";

export const createCells = (count: number): TCell[] => {
    const result = [];

    for (let i = 0; i < count; i++) {
        result.push({isAlive: true})
    }

    return result;
}