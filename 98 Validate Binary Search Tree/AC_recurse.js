/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {boolean}
 */
var isValidBST = function(root) {
    return isValidBSTRecur(root, -Infinity, Infinity);
};
function isValidBSTRecur(root, min, max) {
    if (!root) return true;
    if (root.val <= min || root.val >= max) return false;
    return isValidBSTRecur(root.left, min, root.val) && isValidBSTRecur(root.right, root.val, max);
}