// https://leetcode.com/problems/trapping-rain-water/

/**
 * @param {number[]} height
 * @return {number}
 */
var trap = function(height) {
    let n = height.length;
    if (n < 3) return 0;
    let leftMax = [], rightMax = [];
    let water = 0;
    leftMax[0] = height[0];
    for (let i = 1; i < n; i++) {
        leftMax[i] = Math.max(height[i], leftMax[i-1])
    }
    rightMax[n-1] = height[n-1];
    for (let i = n-2; i >= 0; i--) {
        rightMax[i] = Math.max(height[i], rightMax[i+1])
    }
    for(let i=0; i < n-1; i++) {
        water += Math.min(leftMax[i], rightMax[i]) - height[i]
    }
    return water;
};