import {game} from "Scripts/main/ts/game";
import {isNil} from "Scripts/main/ts/utils";
import {setCanvasSettings} from "Scripts/main/ts/features/canvas";

// Запуск приложения

function start() {
    const canvas = document.getElementById(game.renderID) as HTMLCanvasElement;

    if (isNil(canvas)) {
        throw new Error(`Canvas с id ${game.renderID} не найден`)
    }

    const modal = document.getElementById('modal');
    const input = document.getElementById('input');
    const form = document.getElementById('form');

    if (isNil(modal) || isNil(input) || isNil(form)) {
        throw new Error('Отсутствуют DOM-элементы');
    }

    input.addEventListener('change', event => {
        game.fieldSize = parseInt((event.target as HTMLInputElement).value, 10);
    })

    form.addEventListener('submit', (event) => {
        event.preventDefault();
        modal.parentNode!.removeChild(modal)
        game.start();
        setCanvasSettings(canvas);
    })
}

window.requestAnimationFrame(start);