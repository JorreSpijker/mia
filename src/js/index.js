import { elements } from './views/base';
import Player from './model/Player';
import * as PlayerView from './views/player';
import * as Storage from './controllers/Storage';

/**
    Global state of the app
**/

let data = {
    round: 0,
    settings: {

    },

    players: []

};

/**
    Controllers definition
**/

class gameController {
    constructor() {
    }

    init() {
        this.loadData();
        this.loadPlayers();
        this.initEvents();

        window.data = data;
    }

    loadData() {
        data = Storage.read(data);
    }

    loadPlayers() {
        data.players.forEach(player => {
            PlayerView.renderListItem(player);
        });
    }

    initEvents() {
        elements.settings.addButton.addEventListener('click', (e) => {
            e.preventDefault();
            const value = elements.settings.addName.value;
            console.log(value);
        
            // Add player to data object
            const newPlayer = new Player(value);
            data.players.push(newPlayer);
        
            // Add player to the list
            PlayerView.renderListItem(newPlayer);
        
            // Add player to the LocalStorage
            Storage.persist(data);
        })

        elements.settings.playerList.addEventListener('click', (e) => {
            e.preventDefault();
            const listItem = e.target.closest('.list__item');

            if (listItem) {
                const id = listItem.dataset.id;

                if (e.target.matches('.js-delete, .js-delete *')) {
                    console.log("Delete");
                    // Delete from the state & ui
                    // data.players.delete(id);
                    // Storage.persist(data);
                    // todoView.deleteItem(id);
                };
            }
        })
    }
}

const game = new gameController();
game.init();