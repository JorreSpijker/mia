import { elements } from "./base";

export const renderListItem = player => {
    const markup = `
                    <li class="list__item" data-id="${player._id}">
                        <span class="js-title" contenteditable>${player._name}</span>
                        <a class="js-delete" href="#">
                            Delete
                        </a>
                    </li>`;
    elements.settings.playerList.insertAdjacentHTML("afterbegin", markup);
};

export const deleteItem = id => {
    const item = document.querySelector(`[data-id="${id}"]`);
    item.parentElement.removeChild(item);
};