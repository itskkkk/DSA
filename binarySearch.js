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

//console.log(binarySearch([-1,0,3,5,4,9], 9))
// Write searchInsert(nums, target), which returns the index of target if found, 
// otherwise the index where it would be inserted to keep the array sorted.
function searchInsert(nums, target) {
   let lo = 0, hi = nums.length;
   while(lo < hi) {
      const mid = Math.floor((lo + hi)/2);
      if(nums[mid] >= target) hi = mid;
      else lo = mid + 1;
   }
   return lo;
}
//console.log(searchInsert([1,3,5,6], 7));
// Write searchRange(nums, target), which returns [first, last], 
// the first and last index of target in a sorted array that may contain duplicates, or [-1, -1]. 
// O(log n), so you can't scan along the duplicates
function searchRange(nums, target) {
    function lowerBound(nums, target) {
        let lo = 0, hi = nums.length;
        while(lo < hi) {
            const mid = Math.floor((lo + hi)/2);
            if(nums[mid] >= target) hi = mid;
            else lo =  mid + 1;
        }
        return lo;
    }
    const first = lowerBound(nums, target);
    if (first === nums.length || nums[first] !== target) return [-1, -1];
    function upperBound(nums, target) {
        let lo = 0, hi = nums.length;
        while(lo < hi) {
            const mid = Math.floor((lo + hi)/2);
            if(nums[mid] > target) hi = mid;
            else lo = mid + 1;
        }
        return lo;
    }
    const last = upperBound(nums, target) - 1;

    return [first, last];
}

//console.log(searchRange([5,7,7,8,8,10], 7));