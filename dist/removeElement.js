"use strict";
// Given an integer array nums and an integer val, remove all occurrences of val in nums in-place. The order of the elements may be changed. Then return the number of elements in nums which are not equal to val
Object.defineProperty(exports, "__esModule", { value: true });
function removeElement(nums, target) {
    if (nums.length === 0)
        return 0; // Base case to avoid below computations
    let count = 0; // Counter to keep track of non-target elements
    for (let i = 0; i < nums.length; i++) {
        if (nums[i] !== target) {
            nums[count] = nums[i]; // Move non-target elements to the front
            count++; // Increment the count
        }
    }
    nums.length = count; // Resize the array to the count of non-target elements
    return count;
}
// Space-time complexity
// O(n) time as we must traverse the entire array to determine duplicates
// O(1) space as modify the passed array in place
console.log(removeElement([], 0)); // 0
console.log(removeElement([1, 2, 3], 1)); // 2
console.log(removeElement([1, 1, 3], 1)); // 1
console.log(removeElement([1, 2, 3, 1, 20], 1)); // 3
