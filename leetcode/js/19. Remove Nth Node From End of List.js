/**
 * Created by heben on 2017/3/3.
 */

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
const removeNthFromEnd = function(head, n) {
    let length = 1,i=1,targetNode=head,tempNode=head;
    while(tempNode.next){
        tempNode=tempNode.next;
        length++;
    }
    if(n == length) return targetNode.next;
    while(i+n < length){
        i++;
        targetNode = targetNode.next;
    }
    targetNode.next = targetNode.next.next;
    return head;
};
