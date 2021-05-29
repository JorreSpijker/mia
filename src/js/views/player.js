import { elements } from "./base";

export const renderListItem = player => {
    elements.settings.playerList.insertAdjacentHTML("afterbegin", markup);
    const markup = `
                    <li class="list__item" data-id="${player._id}">
                        <span class="js-title">${player._name}</span>
                        <a class="js-delete" href="#">
                            Delete
                        </a>
                    </li>`;
};

export const deleteItem = id => {
    const item = document.querySelector(`[data-id="${id}"]`);
    item.parentElement.removeChild(item);
};