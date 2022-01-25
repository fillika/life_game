import {TNeighbor} from "Scripts/main/ts/types";

export const findNeighbors = (fieldHeight: number, rowLength: number, x: number, y: number): TNeighbor[] => {
    /**
     * Находим соседей. По часовой из левого угла.
     * Считаю вот так:
     *  0  0 |  0  1 |  0  2
     * x1 x2 | x1 x2 | x1 x2
     */
    const lastHeightCell = fieldHeight - 1;
    const lastRowCell = rowLength - 1;

    const neighbor1: TNeighbor = {
        x1: x - 1 < 0 ? lastHeightCell : x - 1,
        x2: y - 1 < 0 ? lastRowCell : y - 1,
    };
    const neighbor2: TNeighbor  = {
        x1: x - 1 < 0 ? lastHeightCell : x - 1,
        x2: y,
    };
    const neighbor3: TNeighbor  = {
        x1: x - 1 < 0 ? lastHeightCell : x - 1,
        x2: y + 1 >= rowLength ? 0 : y + 1,
    };
    const neighbor4: TNeighbor  = {
        x1: x,
        x2: y + 1 >= rowLength ? 0 : y + 1,
    };
    const neighbor5: TNeighbor  = {
        x1: x + 1 >= fieldHeight ? 0 : x + 1,
        x2: y + 1 >= rowLength ? 0 : y + 1,
    };
    const neighbor6: TNeighbor  = {
        x1: x + 1 >= fieldHeight ? 0 : x + 1,
        x2: y,
    };
    const neighbor7: TNeighbor  = {
        x1: x + 1 >= fieldHeight ? 0 : x + 1,
        x2: y - 1 < 0 ? lastRowCell : y - 1,
    };
    const neighbor8: TNeighbor  = {
        x1: x,
        x2: y - 1 < 0 ? lastRowCell : y - 1,
    };

    return [neighbor1, neighbor2, neighbor3, neighbor4, neighbor5, neighbor6, neighbor7, neighbor8]
}