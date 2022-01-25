import {initDraw} from "Scripts/main/ts/features/canvas";
import {game} from "Scripts/main/ts/game";

/**
 * todo Рендер должен повторяться в зависимости от условий
 * в пустой (мёртвой) клетке, рядом с которой ровно три живые клетки, зарождается жизнь;
 */

initDraw(game.firstGeneration);