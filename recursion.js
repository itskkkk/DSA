// Write sumTo(n), which returns 1 + 2 + ... + n using recursion. No loops.
function sumTo(n) {
    if(n <= 1) return n;
    return n + sumTo(n-1)
}
//console.log(sumTo(5));