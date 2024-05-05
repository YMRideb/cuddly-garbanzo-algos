//88. merge sorted array
//leetcode top interview questions algos
// /**
//  * @param {number[]} nums1
//  * @param {number} m
//  * @param {number[]} nums2
//  * @param {number} n
//  * @return {void} Do not return anything, modify nums1 in-place instead.
//  */

// You are given two integer arrays nums1 and nums2, sorted in non-decreasing order, and two integers m and n, representing the number of elements in nums1 and nums2 respectively.

// Merge nums1 and nums2 into a single array sorted in non-decreasing order.

// The final sorted array should not be returned by the function, but instead be stored inside the array nums1. To accommodate this, nums1 has a length of m + n, where the first m elements denote the elements that should be merged, and the last n elements are set to 0 and should be ignored. nums2 has a length of n.

// Example 1:

// Input: nums1 = [1,2,3,0,0,0], m = 3, nums2 = [2,5,6], n = 3
// Output: [1,2,2,3,5,6]
// Explanation: The arrays we are merging are [1,2,3] and [2,5,6].
// The result of the merge is [1,2,2,3,5,6] with the underlined elements coming from nums1.
// Example 2:

// Input: nums1 = [1], m = 1, nums2 = [], n = 0
// Output: [1]
// Explanation: The arrays we are merging are [1] and [].
// The result of the merge is [1].
// Example 3:

// Input: nums1 = [0], m = 0, nums2 = [1], n = 1
// Output: [1]
// Explanation: The arrays we are merging are [] and [1].
// The result of the merge is [1].
// Note that because m = 0, there are no elements in nums1. The 0 is only there to ensure the merge result can fit in nums1.

const nums1 = [1, 2, 0];
let m = 2;
const nums2 = [1, 3, 5];
let n = 3;

var merge = function (nums1, m, nums2, n) {
  if (n == 0) {
    console.log(nums1);
    return nums1;
  }
  if (n > m) {
    for (let h = 0; h < n; h++) {
      nums1.push(0);
    }
    console.log(nums1);
  }

  for (let i = 0; i < n; i++) {
    console.log(nums2[i]);
    for (let j = 0; j < m + n; j++) {
      console.log(nums1[j]);
      if (nums2[i] == nums1[j]) {
        nums1.splice(j, 0, nums2[i]);
        nums1.pop();
        break;
      } else if (nums1[j] == 0) {
        nums1[j] = nums2[i];
        break;
      } else if (nums2[i] > nums1[j]) {
        continue;
      }
    }
    console.log(nums1);
  }
};

merge(nums1, m, nums2, n);
