export class PlayerList {
    constructor() {
        this.items = []
    }

    add(item) {
        this.items.push(item);
        return item;
    }

    find(id) {
        const index = this.items.findIndex(el => el._id === id);
        const item = this.items[index];
        return item;
    }

    changeName(id, name) {
        const item = this.find(id);
        return item._name = name;
    }

    delete(id) {
        const index = this.items.findIndex(el => el._id === id);
        this.items.splice(index, 1);
    }
}