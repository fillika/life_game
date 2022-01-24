import {CONSTANTS} from "Scripts/main/ts/utils";
import {createField} from "Scripts/main/ts/features/field";

(<any>window).cells = createField(CONSTANTS.fieldSize);

console.log((<any>window).cells)