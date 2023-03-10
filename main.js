const start = Date.now();
var nums = [];

for (var i = 0; i < 100; i++) {
  nums[i] = i * 5;
}

const stop = Date.now();

console.log(`execution time = ${stop - start}`);
console.log(nums);
