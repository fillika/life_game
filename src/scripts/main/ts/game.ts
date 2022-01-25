import {TCell, TOption} from "Scripts/main/ts/types";
import {createField} from "Scripts/main/ts/features/field";
import {createLog} from "Scripts/main/ts/utils/create-log";
import {CONSTANTS} from "Scripts/main/ts/utils";

class Game {
    log: string[];
    firstGeneration: TOption<TCell>[][];

    constructor(fieldSize: number) {
        this.firstGeneration = createField(fieldSize);
        this.log = [createLog(this.firstGeneration)];
    }
}

export const game = new Game(CONSTANTS.fieldSize);