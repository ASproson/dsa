// Given an integer array nums and an integer val, remove all occurrences of val in nums in-place. The order of the elements may be changed. Then return the number of elements in nums which are not equal to val

function removeElement(nums: number[], target: number): number {
  if (nums.length === 0) return 0; // Base case if nums array is empty

  // Two pointers starting at index 1
  // Right will always increment
  // Left will only increment when we hit a unique element
  let [left, right] = [1, 1];

  while (right < nums.length) {
    if (nums[left] !== nums[right]) {
      // Move unique values to the left of the array
      nums[left] = nums[right];
      left++;
    }
    right++;
  }

  // Truncate the passed array up the count of the unique elements
  nums.length = left;

  return nums.length;
}

// Space-time complexity
// O(n) time as we must traverse the entire array to determine duplicates
// O(1) space as modify the passed array in place

// Why we can't use a Set()
// return new Set(nums).size
// A set would not modify the array in place and would instead produce a brand new object, creating O(n) space

console.log(removeElement([], 0)); // 0
console.log(removeElement([1, 2, 3], 1)); // 2
console.log(removeElement([1, 1, 3], 1)); // 2
console.log(removeElement([1, 2, 3, 1, 20], 1)); // 4
