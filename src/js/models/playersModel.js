import uniqid from 'uniqid';

export default class Player {
    constructor() {
        this.items = []
    }

    add(name) {
        const player = {
            id: uniqid(),
            name: name
        }

        this.items.push(player);
        return player;
    }
}