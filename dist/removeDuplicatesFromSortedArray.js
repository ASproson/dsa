"use strict";
// https://leetcode.com/problems/remove-duplicates-from-sorted-array/description/
Object.defineProperty(exports, "__esModule", { value: true });
// Given an integer array sorted in non-decreasing order, remove the duplicates in-place. Return the number of unique elements in the array
function removeDuplicates(nums) {
    if (nums.length === 0)
        return 0; // Handle edge case of no elements
    let left = 1; // Initialize the 'left' pointer
    // Here we check if the previous element is different from the current element, if it is, it's unique and
    // we move it to the current nums[left] index, ensuring that all unique elements start from the left
    // We increment left to ensure that when a unique element is found, we have a new comparator
    for (let right = 1; right < nums.length; right++) {
        if (nums[right] !== nums[right - 1]) {
            nums[left] = nums[right];
            left++;
        }
    }
    // All unique values in nums are now shifted left (nums.splice(0, left)), but non-unique elements are now all stored to the right
    // As such we need to remove them from nums to ensure that nums is mutated in place
    // Truncate nums upto the left pointer
    nums.length = left;
    return nums.length;
}
// Space-time complexity
// O(n) time as we must iterate over all elements in the array to check for uniqueness
// O(1) as we modify the passed array in place
// Why we can't use a Set()
// return new Set(nums).size
// A set would not modify the array in place and would instead produce a brand new object, creating O(n) space
console.log(removeDuplicates([])); // 0
console.log(removeDuplicates([1, 2, 3])); // 3
console.log(removeDuplicates([1, 1, 1, 1])); // 1
console.log(removeDuplicates([1, 2, 2, 3])); // 3
console.log(removeDuplicates([1, 3, 3, 4, 7, 7])); // 4
