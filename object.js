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
console.log(charFrequency("agree"));