/**
    LocalStorage
*/

export const persist = (data) => {
    localStorage.setItem('data', JSON.stringify(data));
}

export const read = (data) => {
    const dataStorage = JSON.parse(localStorage.getItem('data'));

    // Restore data from localStorage
    if (dataStorage) data = dataStorage;
    return data;
}