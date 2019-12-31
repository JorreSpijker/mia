import uniqid from 'uniqid';

export default class Player {
    constructor(name) {
        this._name = name;
        this._id = uniqid();
        this._amountThrows = 0;
        this._throws = [];
        this._round = 0;
        this._roundResults = {};
    }
}