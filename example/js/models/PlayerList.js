export default class PlayerList {
    constructor() {
        this._items = []
    }

    add(item) {
        this._items.push(item);
        return item;
    }

    find(id) {
        const index = this._items.findIndex(el => el._id === id);
        const item = this._items[index];
        return item;
    }

    changeName(id, name) {
        const item = this.find(id);
        return item._name = name;
    }

    delete(id) {
        const index = this._items.findIndex(el => el._id === id);
        this._items.splice(index, 1);
    }

    throw(id) {
        const player = this.find(id);

        if(player._amountThrows < data.settings.max_throws) {
            let dice1, dice2, maxDice, minDice, result;
    
            let throwObject = {};
    
            dice1 = (Math.floor(Math.random() * 6) + 1).toString();
            dice2 = (Math.floor(Math.random() * 6) + 1).toString();
    
            if (dice1 === dice2) {
                result = dice1 * 100;
                maxDice = dice1;
                minDice = dice2;
            } else if (dice1 >  dice2) {
                result = dice1 + dice2;
                maxDice = dice1;
                minDice = dice2;
            } else {
                result = dice2 + dice1;
                maxDice = dice2;
                minDice = dice1;
            }
    
            throwObject = {
                dice1: dice1,
                dice2: dice2,
                maxDice: maxDice,
                minDice: minDice,
                result: result
            };
            
            player._throws.push(throwObject)
            player._amountThrows++;

        }
    }
}