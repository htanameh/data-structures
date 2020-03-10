class HashTable {
    constructor(size) {
        this.data = new Array(size);
    }

    set(key, value){
        const index = this._hash(key);
        this.data[index] = [key, value];
    }

    get(key){
        const index = this._hash(key);
        return this.data[index];
    }

    _hash(key) {
        let hash = 0;
        for (let i = 0; i < key.length; i++) {
            hash = (hash + key.charCodeAt(i) * i) % this.data.length
        }
        return hash;
    }
}

const myHashTable = new HashTable(50);
myHashTable.set('grapes', 10000)
myHashTable.set('apples', 9)
console.log(myHashTable.get('apples'), myHashTable.get('grapes'));