/**
 * Created by heben on 2017/3/19.
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
 * @param {number} k
 * @return {ListNode}
 */

var rotateRight = function(head, k) {
    if(head==null) return head;
    let node=head,target=head,len=1,i=1;
    while(node.next){
        node=node.next;
        len++;
    }
    if(k%len==0) return head;
    k=k%len;
    while(target){
        if(i+k==len) break;
        target=target.next;
        i++;
    }
    let result=target.next;
    node.next=head;
    target.next=null;
    return result;
};
