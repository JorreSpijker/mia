/**
    LocalStorage
*/

export const persist = (data) => {
    localStorage.setItem('players', JSON.stringify(data.players._items));
    localStorage.setItem('settings', JSON.stringify(data.settings));
}

export const read = () => {
    const playerStorage = JSON.parse(localStorage.getItem('players'));
    const settingsStorage = JSON.parse(localStorage.getItem('settings'));

    // Restore data from localStorage
    return {
        playerStorage: playerStorage,
        settingsStorage: settingsStorage
    }
}