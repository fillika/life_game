import {isNil} from "Scripts/main/ts/utils/isNil";

export const showFinalWindow = () => {
    const SHOW_CLASS = "final-window-layer--show";
    const finalWindow = document.getElementById('final-window-layer');

    if (!isNil(finalWindow)) {
        finalWindow.classList.add(SHOW_CLASS)
    }
}