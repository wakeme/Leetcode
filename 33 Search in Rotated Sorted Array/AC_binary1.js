// https://leetcode.com/problems/search-in-rotated-sorted-array/
// reference: https://discuss.leetcode.com/topic/3538/concise-o-log-n-binary-search-solution

/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var search = function(nums, target) {
	let n = nums.length;
	let lo = 0, hi = n - 1;

	while (lo < hi) {
		let mid = Math.floor((lo + hi) / 2);
		if (nums[mid] > nums[hi]) {
			lo = mid + 1
		} else {
			hi = mid
		}
	}

	let rotated = lo;
	lo = 0;
	hi = n - 1;
	if (target === nums[0])
		return 0;
	else if (target < nums[0])
		lo = rotated;
	else 
		hi = (rotated + n - 1) % n;

	while (lo <= hi) {
		let mid = Math.floor((lo + hi) / 2);
		if (nums[mid] === target)
			return mid;
		else if (nums[mid] > target) 
			hi = mid - 1;
		else 
			lo = mid + 1
	}

	return -1
};