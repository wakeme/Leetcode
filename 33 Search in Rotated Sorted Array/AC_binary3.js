// https://leetcode.com/problems/search-in-rotated-sorted-array/
// reference: https://discuss.leetcode.com/topic/34491/clever-idea-making-it-simple

/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var search = function(nums, target) {
    let lo = 0, hi = nums.length;
    while(lo < hi) {
        let mid = Math.floor((lo + hi) / 2);
        let num = (nums[mid] < nums[0]) === (target < nums[0])
                  ? nums[mid] : target > nums[mid] ? Infinity : -Infinity;
        if (num < target) {
            lo = mid + 1
        } else if (num > target) {
            hi = mid
        } else {
            return mid
        }
    }
    return -1
};