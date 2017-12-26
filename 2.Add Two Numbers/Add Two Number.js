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
var addTwoNumbers = function(l1, l2) {
    if( !l1 && !l2 )return null;
    var start = new ListNode(0);
    var cursor = start;
    while( l1 || l2 ){
        if( l1 && l2 ){
            cursor.next = new ListNode( l1.val + l2.val );
        }
        else{
            cursor.next = l1 ? l1 : l2;
        }
        l1 = l1 ? l1.next : null;
        l2 = l2 ? l2.next : null;
        cursor = cursor.next;
    };
    cursor = start.next;
    while(cursor){
        if( cursor.val > 9){
            cursor.val %= 10;
            if(cursor.next){
                cursor.next.val++;
            }
            else{
                cursor.next = new ListNode(1);
            }
        }
        cursor = cursor.next;
    };
    return start.next;
};
