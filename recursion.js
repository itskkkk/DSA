// Write sumTo(n), which returns 1 + 2 + ... + n using recursion. No loops.
function sumTo(n) {
    if(n <= 1) return n;
    return n + sumTo(n-1);
}
//console.log(sumTo(100));
// Write power(base, exp), which returns base raised to exp (exp ≥ 0). No loops, no **, no Math.pow.
function power(base, exp) {
    if(exp === 0) return 1;
    return base * power(base, exp - 1);
}
// console.log(power(3, 4));
// Write reverseStr(str) that reverses a string recursively. No loops, no .reverse().

function reverseStr(str) {
    if(str.length === 0) return "";
    return reverseStr(str.slice(1)) + str[0]
}
// console.log(reverseStr("hellow");