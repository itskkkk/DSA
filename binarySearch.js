// Write binarySearch(nums, target), which returns the index of target in a sorted array, or -1 if it isn't there.
function binarySearch(nums, target) {
    let lo = 0, hi = nums.length - 1;
    while(lo <= hi) {
        let mid = Math.floor((lo + hi)/2);
        if(nums[mid] === target) return mid;
        if(nums[mid] < target) lo = mid + 1;
        else  hi = mid - 1;
    }
    return -1;
}

console.log(binarySearch([-1,0,3,5,4,9], 9))