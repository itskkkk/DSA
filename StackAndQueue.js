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
console.log(reverseWithStack("hello"));