// https://leetcode.com/problems/merge-two-sorted-lists/

/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
var mergeTwoLists = function(l1, l2) {
    if (!l1) return l2;
    if (!l2) return l1;
    var head = new ListNode(0);
    var curr = head, first = true;
    while (l1 && l2) {
        if (l1.val >= l2.val) {
            if (first) {head.next = l2; first = false;}
            curr.next = l2;
            l2 = l2.next;
        } 
        else {
            if (first) {head.next = l1; first = false;}
            curr.next = l1;
            l1 = l1.next;
        }
        curr = curr.next;
    }
    if (l1) curr.next = l1;
    else if (l2) curr.next = l2;
    return head.next;
};