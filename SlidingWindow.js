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
//console.log(minLenSubarray([1,2,3,4,5],8))
//Write longestUnique(str) — return the length of the longest substring with no repeating characters.
function longestUnique(str) {
    const seen = new Set();
    let left = 0;
    let best = 0;
    for(let right=0; right<str.length; right++) {
        while(seen.has(str[right])) {
            seen.delete(str[left])
            left++;
        }
        seen.add(str[right]);
        best = Math.max(best, right - left + 1);
    }
    return best;
}
//console.log(longestUnique("abaakda"))
//Write maxVowels(str, k) — return the maximum number of vowels in any substring of length exactly k.
function maxVowels(str, k) {
    let vowels = new Set(["a","e","i","o","u"]);
    let count = 0;
    for(let i=0; i<k; i++) {
        if(vowels.has(str[i])) count++;
    }
    let max = count;
    for(let j=k; j<str.length; j++) {
        if(vowels.has(str[j])) count++;
        if(vowels.has(str[j-k])) count--;
        max = Math.max(max,count)
    }
    return max;
}
console.log(maxVowels("abcleet",3));