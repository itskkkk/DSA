// Write reverseArray(arr) — reverse an array in-place using two pointers. No .reverse() allowed. 
// Swap elements from both ends moving inward
function reverseArray(arr) {
    let left = 0;
    let right = arr.length - 1;
    while(left < right) {
        let temp = arr[left];
        arr[left] = arr[right];
        arr[right] = temp;
        left++;
        right--;
    }
    return arr;
}
//console.log(reverseArray([1,4,5,6,8,9]));
// Write isPalindrome(str) — return true if a string reads the same forwards and backwards. Use two pointers, no .split().reverse().join().
function isPalindrome(str) {
    let left = 0;
    let right = str.length - 1;
    while(left < right) {
        if(str[left] !== str[right]) return false;
        left++;
        right--;
    }
    return true;
}
//console.log(isPalindrome("racecar"))
// Write twoSumSorted(arr, target) — the array is already sorted. 
// Find two numbers that add up to target and return their indices. 
// Use two pointers — no hash map needed here.
function twoSumSorted(arr, target) {
    let left = 0;
    let right = arr.length - 1;
    while(left < right) {
        let sum = arr[left] + arr[right];
        if(sum === target) {
            return [left,right]
        }else if (sum < target){
            left++;
        }else right--;
    }
}
//console.log(twoSumSorted([1,2,3,4,5],9));