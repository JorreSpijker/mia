import Players from "../models/playersModel";
import PlayersController from "./PlayersController";
import * as Storage from './StorageController';

import * as addPlayerView from "../views/addPlayerView";

export default class Game {
    constructor() {}

    loadItems() {
        if(!data.game) data.game = Storage.read(data);
        // if(!data.game.players) data.game.players = new Players();
    }

    loadControllers() {     
        const ControlPlayers = new PlayersController();
        ControlPlayers.init(data);
    }

    init() {
        console.log("Mia initialized");
        this.loadItems();
        this.loadControllers();
    }
}