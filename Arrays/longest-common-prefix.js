/**
 * Problem: Longest Common Prefix (LeetCode #14)
 * Language: JavaScript
 */

class Solution {
    longestCommonPrefix(strs) {
        // 1. Handle edge cases cleanly
        if (strs.length === 0) return "";
        if (strs.length === 1) return strs[0];

        let result = "";

        // 2. Sort the array alphabetically.
        // This puts the most lexicographically different words at index 0 and the last index.
        strs.sort();
        
        const first = strs[0];
        const last = strs[strs.length - 1];
        
        // 3. Compare characters of the first and last word at identical index positions
        for (let i = 0; i < first.length; i++) {
            if (first[i] !== last[i]) {
                break; // Stop matching the absolute moment a letter mismatch occurs
            }
            result += first[i];
        }

        return result;
    }
}

// ==========================================
// LOCAL TESTING SCRIPT
// ==========================================

const testSolution = new Solution();

console.log("--- Running Local Tests ---");

// Test Case 1: Standard matching prefix across all words
const case1 = ["windtalker", "windy", "wind"];
console.log(`Input: ["windtalker", "windy", "wind"]\nExpected: "wind" | Result: "${testSolution.longestCommonPrefix(case1)}"\n`);

// Test Case 2: No common prefix at all
const case2 = ["cat", "dog", "elephant"];
console.log(`Input: ["cat", "dog", "elephant"]\nExpected: ""     | Result: "${testSolution.longestCommonPrefix(case2)}"\n`);

// Test Case 3: Partial mismatch down the line
const case3 = ["racecar", "race", "radar"];
console.log(`Input: ["racecar", "race", "radar"]\nExpected: "ra"   | Result: "${testSolution.longestCommonPrefix(case3)}"\n`);

// Test Case 4: Single element array edge case
const case4 = ["alone"];
console.log(`Input: ["alone"]\nExpected: "alone"| Result: "${testSolution.longestCommonPrefix(case4)}"`);