export const createCells = (count: number): string[] | number[] => {
    const result = [];

    for (let i = 0; i < count; i++) {
        result.push(1)
    }

    return result;
}