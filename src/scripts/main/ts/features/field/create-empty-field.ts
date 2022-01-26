import {TOption} from "Scripts/main/ts/types";

export const createEmptyField = (size: number): TOption<number | string>[][] => {
    const result = [];

    for (let i = 0; i < size; i++){
        result[i] = [];
    }

    return result;
}