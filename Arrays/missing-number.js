/**
 * Problem: Missing Number (LeetCode #268)
 * Language: JavaScript
 */

class Solution {
  findMissingNumber(nums) {
    // 1. Sort numbers properly using a numerical compare function
    nums.sort((a, b) => a - b);

    // 2. Loop through the array, stopping 1 step early (nums.length - 1)
    // This prevents nums[i + 1] from looking past the end of the array!
    for (let i = 0; i < nums.length - 1; i++) {
      // Logic: If the next number is NOT exactly 1 greater than the current number
      if (nums[i] - nums[i + 1] != -1) {
        // Return the current number plus 1 to fill the discovered gap
        return nums[i] + 1;
      }
    }

    // 3. Edge Case: If the loop finishes and finds NO gaps, 
    // it means the missing number is the next one at the very end of the sequence.
    // Example: [0, 1, 2] -> length is 3, and 3 is the missing number!
    return nums.length;
  }
}

// ==========================================
// LOCAL TESTING SCRIPT
// ==========================================
const testSolution = new Solution();

console.log("--- Running Local Tests ---");

// Test Case 1: Minimal array (Gap is in the middle)
const case1 = [3, 0, 1];
console.log("Input: [3, 0, 1] | Expected: 2 | Result:", testSolution.findMissingNumber(case1)); 

// Test Case 2: Larger array (Gap is near the end)
const case2 = [9, 6, 4, 2, 3, 5, 7, 0, 1];
console.log("Input: [9, 6, 4, 2, 3, 5, 7, 0, 1] | Expected: 8 | Result:", testSolution.findMissingNumber(case2));

// Test Case 3: Edge Case (Gap is at the very end)
const case3 = [0, 1, 2];
console.log("Input: [0, 1, 2] | Expected: 3 | Result:", testSolution.findMissingNumber(case3));