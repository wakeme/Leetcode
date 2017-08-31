// https://leetcode.com/problems/house-robber-iii/
// reference: https://discuss.leetcode.com/topic/39834/step-by-step-tackling-of-the-problem

/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number}
 */
var rob = function(root) {
    if (root === null) return 0;
    if (root.left === null && root.right === null) return root.val;
    let res = robSub(root);
    return Math.max(res[0], res[1]);

    function robSub(node) {
        if (node === null) return [0, 0];
        let left = robSub(node.left);
        let right = robSub(node.right);
        let res = [];
        res[0] = Math.max(left[0], left[1]) + Math.max(right[0], right[1]);
        res[1] = left[0] + right[0] + node.val;
        return res;
    }
};