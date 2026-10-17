// Write countKeys(obj) — return how many keys an object has.
// Don't use Object.keys().length — loop manually using for...in.

function countKeys(obj) {
  let count = 0;
  for(const key in obj){
    count++;
  }
  return count;
}
console.log(countKeys({a:1}));
