// https://leetcode.com/problems/house-robber/

/**
 * @param {number[]} nums
 * @return {number}
 */
var rob = function(nums) {
    let res = robSub(nums);
    return Math.max(res[0], res[1]);

    function robSub(nums) {
        if (nums.length < 1) return [0, 0];
        let res = [];
        let sub = robSub(nums.slice(1));
        res[0] = Math.max(sub[0], sub[1]);
        res[1] = sub[0] + nums[0];
        return res;
    }
};