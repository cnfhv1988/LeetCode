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
//1563 test cases passed, beats 98.54% of Javascript submissions
var addTwoNumbers = function(l1, l2) {

    if(!l1 && !l2) return null;
    var flag = 0;
    var start = new ListNode(0);
    var cursor = start;
    while(l1 && l2) {
        cursor.next = new ListNode((l1.val + l2.val + flag)%10);
        flag = l1.val + l2.val + flag > 9 ? 1 : 0;
        l1 = l1.next;
        l2 = l2.next;
        cursor = cursor.next;
    }
    cursor.next = l1 ? l1 : l2;
    while(cursor.next && flag === 1){
        cursor.next.val++;
        if(cursor.next.val > 9) {
            cursor.next.val %= 10;
        }
        else{
            flag = 0;
        }
        cursor = cursor.next;
    }
    if(flag) {
        cursor.next = new ListNode(1);
    }
    return start.next;
};
