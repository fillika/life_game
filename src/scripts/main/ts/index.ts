import {CONSTANTS} from "Scripts/main/ts/utils";
import {createField} from "Scripts/main/ts/features/field";
import {renderField} from "Scripts/main/ts/features/render";

(<any>window).cells = createField(CONSTANTS.fieldSize);

// Render
const field = createField(CONSTANTS.fieldSize);

renderField(field);

console.log((<any>window).cells)