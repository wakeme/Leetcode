// https://leetcode.com/problems/non-decreasing-array/

/**
 * @param {number[]} nums
 * @return {boolean}
 */
var checkPossibility = function(nums) {
    let left = nums.slice(0);
    let right = nums.slice(0);
    let decIndex = nums.findIndex((item, i) => item > nums[i+1]);
    if (decIndex > -1) {
        left.splice(decIndex, 1);
        right.splice(decIndex + 1, 1);
        return !left.some((item, i, arr) => item > arr[i+1]) || !right.some((item, i, arr) => item > arr[i+1])
    }
    return true;
};