class Solution {
    twoSum(nums, target) {
        for (let i = 0; i < nums.length; i++) {
            for (let j = i + 1; j < nums.length; j++) {
                if (nums[i] + nums[j] === target) {
                    return [i, j];
                }
            }
        }
        return [];
    }
}

// ==========================================
// TESTING CODE (Runs locally on your computer)
// ==========================================

// Create the solver object from our class blueprint
const solver = new Solution();

console.log("--- Running Two Sum Tests ---");

// Test Case 1
const result1 = solver.twoSum([2, 7, 11, 15], 9);
console.log("Test 1 Input: [2, 7, 11, 15], Target: 9");
console.log("Expected: [0, 1] | Your Output:", result1); 
console.log("-----------------------------------------");

// Test Case 2
const result2 = solver.twoSum([3, 2, 4], 6);
console.log("Test 2 Input: [3, 2, 4], Target: 6");
console.log("Expected: [1, 2] | Your Output:", result2);
console.log("-----------------------------------------");

// Test Case 3
const result3 = solver.twoSum([3, 3], 6);
console.log("Test 3 Input: [3, 3], Target: 6");
console.log("Expected: [0, 1] | Your Output:", result3);
console.log("-----------------------------------------");