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