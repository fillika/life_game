import {TCell, TOption} from "Scripts/main/ts/types";

export const createEmptyField = (size: number): TOption<TCell>[][] => {
    const result = [];

    for (let i = 0; i < size; i++){
        result[i] = [];
    }

    return result;
}