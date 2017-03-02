/**
 * Created by heben on 2017/2/28.
 */

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

function ListNode(val){
    this.val = val;
    this.next = null;
}

var singleLink = function(){
    this.head = new ListNode(null);
    this.insert = function(v){
        var p = this.head;
        while(p.next != null){
            p = p.next;
        }
        p.next = new Node(v);
    }
};

var addTwoNumbers = function(l1, l2) {

    var head = new ListNode((l1.val + l2.val)%10);
    var carry = Math.floor((l1.val + l2.val)/10);
    var prevList = head;
    var next1 = l1.next,next2 = l2.next;
    while(next1 != null || next2 != null || carry!=0){
        carry += (next1?next1.val:0) + (next2?next2.val:0);
        prevList.next = new ListNode(carry%10);
        next1 = next1?next1.next:null;
        next2 = next2?next2.next:null;
        prevList = prevList.next;
        carry = Math.floor(carry / 10);
    }
    return head;

};