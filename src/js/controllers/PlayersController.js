import player from '../models/playersModel';
import * as addPlayerView from '../views/addPlayerView';
import { elements } from '../views/base';
import * as Storage from '../controllers/StorageController';

/**
    TODO CONTROLLER
**/

export default class PlayersController {
    constructor(data) {
        this.data = data;
    }

    loadPlayers() {
        console.log(
            data.game.players

        );
        
        // .forEach(players => {
        //     addPlayerView(player);
        // })
    }

    addToModel(name) {
        data.game.players.add(name);
    }

    initEvents() {
        elements.settings.start.addEventListener("click", () => {
            let players = document.querySelectorAll(".settings-container__player");
            
            players.forEach(player => {
                let name = player.querySelector('.js-settingsName').value;
                data.game.players.add(name);
                Storage.persist(data);
            });
        });

        elements.settings.addField.addEventListener("click", () => {
            addPlayerView.renderAddPlayer();
        });
    }

    init() {
        this.initEvents();
        this.loadPlayers();
    }
}