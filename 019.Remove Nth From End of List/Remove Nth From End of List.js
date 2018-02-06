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
var removeNthFromEnd = function(head, n) {
    var i=1;
    var c1=head,c2=head;
    while(i<=n){
        c1=c1.next;
        i++;
    }
    while(c1 != null && c1.next != null){
        c1=c1.next;
        c2=c2.next;
    }
    c1 == null ? head = head.next : c2.next = c2.next.next;
    return head;
};
