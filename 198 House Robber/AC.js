// https://leetcode.com/problems/house-robber/

/**
 * @param {number[]} nums
 * @return {number}
 */
var rob = function(nums) {
    let include = 0, exclude = 0;
    for (let idx = 0; idx < nums.length; idx++) {
        let i = include, e = exclude;
        include = e + nums[idx];
        exclude = Math.max(e, i);
    }
    return Math.max(include, exclude)
};