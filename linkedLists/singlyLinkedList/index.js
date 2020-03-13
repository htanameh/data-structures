class Node {
	constructor(value) {
		this.value = value;
		this.next = null;
	}
}

class SinglyLinkedList {
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

	traverse(index) {
		if (this.length === 0) {
			return null;
		}
		if (index > this.length || index < 0) {
			return null;
		}
		let indexNode = this.head;
		let count = 0;
		while (index !== count) {
			indexNode = indexNode.next;
			count++;
		}
		return indexNode;
	}

	insert(index, value) {
		if(index < 0 || index > this.length) {
			return false;
		}
		if(index === 0){
			this.prepend(value);
			return true;
		}
		if(index === this.length) {
			this.append(value);
			return true;
		}
		let prevNode = this.traverse(index - 1);
		const newNode = new Node(value);
		newNode.next = prevNode.next;
		prevNode.next = newNode;
		this.length++;
		return true;
	}
}