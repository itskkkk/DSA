// Write reverseWithStack(str) that reverses a string using a stack.
// Push every character, then pop them all into a result. No .reverse().
function reverseWithStack(str) {
    if(str.length === 0) return "";
    let stack = [];
    let result = [];
    for(let i=0; i<str.length; i++) {
        stack.push(str[i]);
    }
    while(stack.length) {
        result += stack.pop();
    }
    return result;
}
//console.log(reverseWithStack("hello"));
// Write isValid(s). The string contains only ( ) [ ] { }. 
// Return true if every opening bracket is closed by the same type, in the correct order.
function isValid(s) {
    let stack = [];
    const pairs = {
        ")" : "(", 
        "]" : "[",
        "}" : "{",
    }
    for (let ch of s) {
         if(ch === "(" || ch === "[" || ch === "{") {
            stack.push(ch);
         } else  {
            if( stack.pop() !== pairs[ch]) return false;
         }
    }
    return stack.length === 0;
} 
//console.log(isValid("{[()]}"));
//Build the Queue class with enqueue(val), dequeue(), peek(), size() and isEmpty(). Every operation must be O(1), so no .shift().
class Queue {
    constructor() {
        this.items = {};
        this.head = 0;
        this.tail = 0;
    }
    enqueue(val) {
        this.items[this.tail] = val;
        this.tail++;
    }
    dequeue() {
        if(this.head === this.tail) return undefined;
        const val = this.items[this.head];
        delete this.items[this.head];
        this.head ++;
        return val;
    }
    peek() {
        return this.items[this.head];
    }
    size() {
        return this.tail - this.head;
    }
    isEmpty() {
        return this.head === this.tail;
    }
}
// let q = new Queue();
// q.enqueue(1);
// q.enqueue(2);
// q.enqueue(3);
// console.log(q.dequeue());
// console.log(q);
// console.log(q);
// console.log(q.peek());
// console.log(q.size());
//console.log(q.isEmpty());

// Write evalRPN(tokens) to evaluate a postfix expression (Reverse Polish Notation). Numbers go on the stack.
// An operator pops two numbers, applies itself, and pushes the result. Division truncates toward zero (use Math.trunc).
function evalRPN(tokens) {
    const stack = [];
    for(let token of tokens) {
        if(token === "+" || token === "-" || token === "*" || token === "/") {
            const b = stack.pop();
            const a = stack.pop();
            let result;
            if(token === "+") result = a + b;
            else if(token === "-") result = a - b;
            else if(token === "*") result = a * b;
            else result = Math.trunc(a/b);
            stack.push(result);
        } else {
            stack.push(Number(token));
        }
    }
    return stack.pop();
}
console.log(evalRPN(["15","4","5","9","8","-","*","4","/","+","/"])); 
