/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} n
 * @return {ListNode}
 */
//208 test cases passed, beats 99.85 of Javascript submissions
var removeNthFromEnd = function(head, n) {

    var index = new ListNode(0);
    index.next = head;
    var p1 = index, p2 = index, c = 0;
    while(c < n) {
        c++;
        p1 = p1.next
    }
    while(p1.next){
        p1 = p1.next
        p2 = p2.next
    }
    p2.next = p2.next.next;
    return index.next;
};
