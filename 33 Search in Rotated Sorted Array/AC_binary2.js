// https://leetcode.com/problems/search-in-rotated-sorted-array/

/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var search = function(nums, target) {
	let n = nums.length;
	let lo = 0, hi = n - 1;

	while(lo <= hi) {
		let mid = lo + Math.floor((hi - lo) / 2)
		if (nums[mid] === target) {
			return mid
		}
		if (nums[mid] >= nums[lo]) {
			if (target >= nums[lo] && target < nums[mid]) {
				hi = mid - 1
			} else {
				lo = mid + 1
			}
		} else {
			if (target > nums[mid] && target <=nums[hi]) {
				lo = mid + 1
			} else {
				hi = mid - 1
			}
		}
	}
	return -1
};