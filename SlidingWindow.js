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
console.log(maxSumWindow([3],1));