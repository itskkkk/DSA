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