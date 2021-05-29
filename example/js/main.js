import { elements } from './views/base';
import Player from './models/Player';
import PlayerList from './models/PlayerList'
import * as PlayerView from './views/player';
import * as DiceView from './views/dice';
import * as Storage from './controllers/Storage';

/**
 Global state of the app
 **/

let data = {
    settings: {
        max_throws: 3
    },

    game: {
        round: 0
    }
};

/**
 Controllers definition
 **/

class gameController {
    constructor() {
    }

    init() {

        data.players = new PlayerList();
        this.loadSettings();
        this.loadPlayers();
        this.renderPlayers();
        this.initEvents();

        window.data = data;

    }

    loadSettings() {
        Storage.read(data).settingsStorage;
    }

    loadPlayers() {

        const players = Storage.read(data).playerStorage;

        if (players) {
            players.forEach(player => {
                data.players.add(player)
            })
        }

    }

    renderPlayers() {
        if( data.players ) {
            data.players._items.forEach(player => {
                PlayerView.renderListItem(player);
            });
        }

    }

    initEvents() {
        elements.settings.addButton.addEventListener('click', (e) => {
            e.preventDefault();
            const value = elements.settings.addName.value;

            // Add player to data object

            if (value) {

                let player = new Player(value);
                data.players.add(player);

                // Add player to the list
                PlayerView.renderListItem(player);

                // Add player to the LocalStorage
                Storage.persist(data);

                elements.settings.addName.value = '';
            } else {
                alert('Name is empty.');
            }

        });

        elements.settings.playerList.addEventListener('click', (e) => {
            e.preventDefault();
            const listItem = e.target.closest('.list__item');

            if (listItem) {
                const id = listItem.dataset.id;

                if (e.target.matches('.js-title, .js-title *')) {
                    let newValue;

                    e.target.closest('.js-title').addEventListener('focusout', () => {
                        newValue = e.target.closest('.js-title').textContent;
                        data.players.changeName(id, newValue);
                        Storage.persist(data);
                    })
                };

                if (e.target.matches('.js-delete, .js-delete *')) {

                    if(window.confirm(`Wil je de speler ${data.players.find(id)._name} verwijderen?`)) {
                        data.players.delete(id);

                        PlayerView.deleteItem(id)
                        Storage.persist(data);
                    }
                }
            }
        });

        elements.game.start.addEventListener('click', (e) => {
            e.preventDefault();

            console.log(data);
        })

        elements.game.throw.addEventListener('click', (e) => {
            e.preventDefault();
            const startPlayer = data.players._items[0];
            const id = startPlayer._id;
            data.players.throw(id);
            Storage.persist(data);
            const lastThrow = data.players.find(id)._throws.length - 1;
            const lastThrowObj = data.players.find(id)._throws[lastThrow];
            DiceView.renderDice(lastThrowObj.result);
        });

        elements.game.next.addEventListener('click', (e) => {
            e.preventDefault();
        });
    }
}

const game = new gameController();
game.init();