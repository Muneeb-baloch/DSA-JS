/**
 * Problem: Remove Duplicates from Sorted Collection (LeetCode #26)
 * Language: JavaScript
 */

class Solution {
    removeDuplicates(nums) {
        // 1. Outer loop tracks the current unique element to compare against
        for (let i = 0; i < nums.length; i++) {
            // 2. Inner loop scans the remaining elements to find duplicates
            for (let j = i + 1; j < nums.length; j++) {
                // Logic: If a match is found, it's a duplicate
                if (nums[i] === nums[j]) {
                    // Remove the duplicate element at index j
                    nums.splice(j, 1);
                    // Step back the pointer so we don't skip the next item that shifts into index j
                    j--;
                }
            }
        }
        
        // 3. Return the total count of remaining unique elements
        return nums.length; 
    }
}

// ==========================================
// LOCAL TESTING SCRIPT
// ==========================================

const testSolution = new Solution();

console.log("--- Running Local Tests ---");

// Test Case 1: Minimal array (Short duplicate sequence)
const case1Nums = [1, 1, 2];
console.log(`Input: [1, 1, 2] | Expected Output Length: 2 | Result:`, testSolution.removeDuplicates(case1Nums), `| Array State: [${case1Nums}]`);

// Test Case 2: Larger array (Multiple consecutive duplicates)
const case2Nums = [0, 0, 1, 1, 1, 2, 2];
console.log(`Input: [0, 0, 1, 1, 1, 2, 2] | Expected Output Length: 3 | Result:`, testSolution.removeDuplicates(case2Nums), `| Array State: [${case2Nums}]`);

// Test Case 3: Edge Case (No duplicates present)
const case3Nums = [1, 2, 3];
console.log(`Input: [1, 2, 3] | Expected Output Length: 3 | Result:`, testSolution.removeDuplicates(case3Nums), `| Array State: [${case3Nums}]`);