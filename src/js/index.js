import GameController from "./controllers/GameController";
import * as Storage from "./controllers/StorageController";

/**
    Global state of the app
**/

const data = {};
window.data = data;

/**
    Controllers definition
**/
const Game = new GameController();
Game.init();