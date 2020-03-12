class Node {
	constructor(value) {
		this.value = value;
		this.next = null;
	}
}

class SinglyLinkedList{
    constructor() {
		this.head = null;
		this.tail = null;
		this.length = 0;
	}

	append(value) {
		const newNode = new Node(value);
		if (this.head === null) {
			this.head = newNode;
			this.tail = this.head;
		} else {
			this.tail.next = newNode;
			this.tail = newNode;
		}
		this.length++;
		return this.printList();
	}

	prepend(value) {
		const newNode = new Node(value);
		if (this.head === null) {
			this.head = newNode;
			this.tail = this.head;
		} else {
			newNode.next = this.head;
			this.head = newNode;
		}
		this.length++;
		return this.printList();
	}

	printList() {
		let listItems = [];
		if (this.length) {
			let start = this.head;
			while (start !== null) {
				listItems.push(start.value);
				start = start.next;
			}
		}
		return listItems;
	}
}