// https://leetcode.com/problems/house-robber-ii/

/**
 * @param {number[]} nums
 * @return {number}
 */
var rob = function(nums) {
    if (nums.length === 1) return nums[0];
    return Math.max(robSub(nums, 0, nums.length - 2), robSub(nums, 1, nums.length - 1));

    function robSub(nums, lo, hi) {
        let include = 0, exclude = 0;
        for (let idx = lo; idx <= hi; idx++) {
            let i = include, e = exclude;
            include = e + nums[idx];
            exclude = Math.max(e, i);
        }
        return Math.max(include, exclude)
    }
};