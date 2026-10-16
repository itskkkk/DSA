// Write mostFrequent(arr) — return the element that appears most often.
// If there's a tie, return the one that appears first in the array.
function twoSum(arr, target) {
  const store = {};
  for(let i=0; i<arr.length; i++) {
    let compliment = target - arr[i];
    if(compliment in store) return [store[compliment],i];
    store[arr[i]] = i;
  }
}
console.log(twoSum([0,1,2,3,5], 8));