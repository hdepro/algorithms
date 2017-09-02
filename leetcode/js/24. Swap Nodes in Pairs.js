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
 * @return {ListNode}
 */

function ListNode(val) {
    this.val = val;
    this.next = null;
}

"use strict";

const swapPairs = function(head) {
    let result = new ListNode(0);
    result.next = head;
    let node = result;
    while(node.next!= null && node.next.next != null){
        let first = node.next;
        let second = node.next.next;
        first.next = second.next;
        second.next = node.next;
        node.next = second;
        node = node.next.next;
    }
    return result.next;
};


let a=new ListNode(1);
let b = new ListNode(2);
let c = new ListNode(3);
let d = new ListNode(4);
a.next = b;
b.next = c;
c.next = d;
console.log(swapPairs(a));
