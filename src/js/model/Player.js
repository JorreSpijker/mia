import uniqid from 'uniqid';

export default class Player {
    constructor(name) {
        this._name = name;
        this._id = uniqid();
        this._throws = {};
    }

    delete(id) {
        console.log(data.players);
        console.log(id);
        // const index = data.players.findIndex(el => el._id === id);
        // data.players.splice(index, 1);
    }

    get name() {
        return this._name;
    }

    set name(newName) {
        this._name = newName;
    }
}