class MyArray {
    constructor() {
        this.length = 0;
        this.data = {}; 
    }
    get(index) {
        if(index >= this.length){
            return undefined;
        }
        return this.data[index];
    }
    push(item) {
        this.data[this.length] = item;
        this.length++;
        return this.data;
    }
    pop() {
        if(this.length <= 0){
            return undefined;
        }
        const deletedItem = this.data[this.length - 1];
        delete this.data[this.length - 1];
        this.length--;
        return deletedItem;
    }
    deleteAtIndex(index) {
        if(index >= this.length){
            return undefined;
        }
        const deletedItem = this.data[index];
        this.shiftItems(index);
        return deletedItem;
    }
    shiftItems(index) {
        if(index >= this.length){
            return undefined;
        }
        for(let i = index; i < this.length - 1; i++){
            this.data[i] = this.data[i + 1];
        }
        // removing the last element after shifting
        this.pop();
    }
}

const myArray = new MyArray();
myArray.push('hi');
myArray.push('you');
myArray.push('!');
myArray.pop();
myArray.deleteAtIndex(0);
myArray.push('are');
myArray.push('nice');
myArray.shiftItems(0);
console.log(myArray);