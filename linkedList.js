// Build your own Node and LinkedList classes. Node has val and next. 
// LinkedList has a head (null when empty) and these methods: append(val), prepend(val), toArray(), size(), contains(val). 
// No storing values in a hidden array. Use real nodes.

class Node {
    constructor(val) {
        this.val = val;
        this.next = null;
    }
};

class LinkedList {
    constructor() {
        this.head = null;
    }
    append(val) {
        const newNode = new Node(val);
        if(this.head === null) { 
            this.head = newNode;
            return;
        }
        let cur = this.head;

        while(cur.next !== null) {
            cur = cur.next;
        }
        cur.next = newNode
    }
    prepend(val) {
        const newNode = new Node(val);
        newNode.next = this.head;
        this.head = newNode;
    }
    toArray() {
        const result = [];
        let cur = this.head;
        while(cur !== null) {
            result.push(cur.val);
            cur = cur.next;
        }
        return result;
    }
    size() {
        let count = 0;
        let cur = this.head;
        while ( cur !== null) {
            count++;
            cur = cur.next;
        }
        return count;
    }
    contains(val) {
        let cur = this.head;
        while(cur !== null) {
            if(cur.val === val) return true;
            cur = cur.next;
        }
        return false;
    }
}

// const list = new LinkedList();

// list.append(10);
// list.append(20);
// list.append(30);

// list.prepend(5);

// console.log(list.toArray());  // [5, 10, 20, 30]
// console.log(list.size());     // 4
// console.log(list.contains(20)); // true
// console.log(list.contains(50)); // false

// console.log(list.head);

// Write reverseList(head), which reverses a linked list in place and returns the new head. 
// Rewire the next pointers. Don't copy values into an array.
function reverseList(head) {
    let prev = null; 
    let cur = head;
    while(cur !== null) {
        const next = cur.next;
        cur.next = prev;
        prev = cur;
        cur = next;
    }
    return prev;
}

// Write middleNode(head), which returns the middle node of the list. 
// If there are two middles, return the second one. Do it in one pass using fast and slow pointers.
function middleNode(head) {
    let slow = head, fast = head;
    while(fast !== null && fast.next !== null) {
        slow = slow.next;
        fast = fast.next.next;
    }
    return slow;
}