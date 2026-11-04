//Write maxSumWindow(arr, k) — return the maximum sum of any k consecutive elements.
function maxSumWindow(arr,k) {
    let sum = 0;
    for(let i=0; i<k; i++) {
       sum += arr[i];
    }
    let max = sum;
    for(let i=k; i<arr.length; i++) {
       sum += arr[i];
       sum -= arr[i-k]
       max = Math.max(max, sum)
    }
    return max;
}
//console.log(maxSumWindow([3],1));
// Write minLenSubarray(arr, target) — return the minimum length of a contiguous subarray whose sum is ≥ target.
// Return 0 if none exists.
function minLenSubarray(arr, target) {
    let left = 0;
    let sum = 0;
    let minLen = Infinity;
    for (let right=0; right<arr.length; right++) {
        sum += arr[right]
        while(sum >= target) {
           minLen = Math.min(minLen, right - left + 1)
           sum -= arr[left];
           left++;
        }
    }
    return minLen === Infinity ? 0 : minLen;
}
console.log(minLenSubarray([1,2,3,4,5],8))