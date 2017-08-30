// https://leetcode.com/problems/non-decreasing-array/

/**
 * @param {number[]} nums
 * @return {boolean}
 */
var checkPossibility = function(nums) {
    if (nums.length <= 2) return true;
    let modified = 0;
    for (let i = 1; i < nums.length; i++) {
        if (nums[i] < nums[i-1]) {
            if (++modified > 1) {
                return false
            } else if (i === 1 || nums[i] >= nums[i-2]) {
                nums[i-1] = nums[i]
            } else {
                nums[i] = nums[i-1]
            }
        }
    }
    return true
};