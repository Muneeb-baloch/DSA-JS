/**
 * Problem: Merge Sorted Array (LeetCode #88)
 * Language: JavaScript
 */

/**
 learning from this problem: 

 first i have tried to use arr1.sort() function but when i submitted 
 there was a Test Case where array has value of [5,10,15] and this sort function 
 consider 10 and 15 is smaller than 5 because it is sorting the array in lexicographical order 
 not in numerical order. so that's why i have used the sort function with a compare function 
 (a, b) => a - b to sort the array in numerical order.
 */

class Solution {
    merge(arr1, m, arr2, n) {
        // 1. Edge Case: If arr2 has no elements to merge, arr1 is already complete
        if (n === 0) {
            return;
        }

        // 2. Remove the extra placeholder zeros from the end of arr1
        // Starting from index 'm', splice drops everything to the right
        arr1.splice(m);

        // 3. Push all elements of arr2 into arr1 using the spread operator (...)
        arr1.push(...arr2);

        // 4. Sort the combined array in ascending numerical order
        arr1.sort((a, b) => a - b);
        
        // Return arr1 for testing clarity (LeetCode modifies it in-place)
        return arr1;
    }
}

// ==========================================
// LOCAL TESTING SCRIPT
// ==========================================

const testSolution = new Solution();

console.log("--- Running Local Tests ---");

// Test Case 1: Standard merge with trailing zeros
const case1Arr1 = [1, 2, 3, 0, 0, 0];
const case1M = 3;
const case1Arr2 = [2, 5, 6];
const case1N = 3;

testSolution.merge(case1Arr1, case1M, case1Arr2, case1N);
console.log(`Test Case 1 Result: [${case1Arr1}] | Expected: [1,2,2,3,5,6]`);

// Test Case 2: arr2 is empty
const case2Arr1 = [1];
const case2M = 1;
const case2Arr2 = [];
const case2N = 0;

testSolution.merge(case2Arr1, case2M, case2Arr2, case2N);
console.log(`Test Case 2 Result: [${case2Arr1}] | Expected: [1]`);

// Test Case 3: arr1 is empty (only holds a placeholder zero)
const case3Arr1 = [0];
const case3M = 0;
const case3Arr2 = [1];
const case3N = 1;

testSolution.merge(case3Arr1, case3M, case3Arr2, case3N);
console.log(`Test Case 3 Result: [${case3Arr1}] | Expected: [1]`);