// https://leetcode.com/problems/validate-binary-search-tree/

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
    if (!root) {
        return true;
    }
    var heap = [];
    var node = root, min = -Infinity;
    while (node) {
        heap.push(node);
        if (node && node.left){
            node = node.left;
        } else if (node && node.right) {
            node = heap.pop();
            node.left = null;
            if (node && min >= node.val) return false;
            else min = node.val;
            node = node.right;
        } else {
            node = heap.pop();
            node.left = null;
            while (node && !node.right) {
                if (node && min >= node.val) return false;
                else min = node.val;
                node = heap.pop();
                if (node) node.left = null;
            }
        }
    }
    return true;
};