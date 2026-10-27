// Write countKeys(obj) — return how many keys an object has.
// Don't use Object.keys().length — loop manually using for...in.

function countKeys(obj) {
  let count = 0;
  for(const key in obj){
    count++;
  }
  return count;
}
// console.log(countKeys({a:1}));

// Write charFrequency(str) — return an object counting how many times each character appears in a string.

function charFrequency(str) {
  let obj = {};
  for(const ch of str) {
    obj[ch] = (obj[ch] || 0) + 1;
  }
  return obj;
}
// console.log(charFrequency("agree"));
// Write isAnagram(str1, str2) — return true if two strings are anagrams (same letters, same counts, different order).

function isAnagram(str1, str2) {
    if(str1.length !== str2.length) return false;
    let obj = {};
    for(const ch of str1) {
        obj[ch] = (obj[ch] || 0) + 1;
    }
    for(const ch of str2) {
        if(!obj[ch]) return false;
        obj[ch]--;
    }
    return true;
}

//console.log(isAnagram("aba","aab"))
//Write hasDuplicate(arr) — return true if any value appears more than once. Use a Set, not nested loops.
function hasDuplicate(arr) {
    let set = new Set();
    for(const ch of arr) {
        if(set.has(ch)) return true;
        set.add(ch)
    }
    return false;
}
//console.log(hasDuplicate([2,3]))
// Write firstNonRepeating(str) — return the first character that appears exactly once.
// Return null if none exists. Must run in O(n).
function firstNonRepeating(str) {
    let obj = {};
    for (const ch of str) {
        obj[ch] = (obj[ch] || 0) + 1;
    }
    for (const ch in obj) {
        if(obj[ch] === 1) return ch;
    }
    return null;
}
//console.log(firstNonRepeating("aabbc"));
