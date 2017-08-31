// https://leetcode.com/problems/trapping-rain-water/
// reference: https://discuss.leetcode.com/topic/18731/7-lines-c-c

/**
 * @param {number[]} height
 * @return {number}
 */
var trap = function(height) {
    if (height.length < 3) return 0;
    let left = 0, right = height.length - 1;
    let water = 0, level = -Infinity;
    while(left < right) {
        let lower = height[height[left] < height[right] ? left++ : right--];
        level = Math.max(level, lower);
        water += level - lower;
    }
    return water;
};