import { elements } from "./base";

export const renderAddPlayer = (player) => {

    const markup = `
        <div class="settings-container__player">
            <input type="text" name="name" class="js-settingsName" placeholder="Naam" value="${player.name}">
            <button class="js-settingsName-delete">Verwijderen</button>
        </div>`;
    elements.settings.container.insertAdjacentHTML("afterbegin", markup);
};

export const deleteItem = id => {
    const item = document.querySelector(`[data-id="${id}"]`);
    item.parentElement.removeChild(item);
};