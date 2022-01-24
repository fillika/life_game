export const createDeadCells = (): HTMLDivElement => {
    const cell = document.createElement('div');
    cell.classList.add('cell', 'dead');

    return cell;
}

export const createAliveCells = (): HTMLDivElement => {
    const cell = document.createElement('div');
    cell.classList.add('cell', 'alive');

    return cell;
}