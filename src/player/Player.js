import uniqid from 'uniqid';

export class Player {
    constructor(name) {
        this.name = name;
        this.id = uniqid();
    }
}