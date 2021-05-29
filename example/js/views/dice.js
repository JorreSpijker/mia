import { elements } from "./base";

export const renderDice = result => {
    elements.game.dices.innerHTML = "";
    const markup = `${result}`;
    elements.game.dices.insertAdjacentHTML("afterbegin", markup);
};