/**
 * Created by heben on 2017/3/13.
 */

/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {ListNode} head
 * @return {TreeNode}
 */
"use strict";

function ListNode(val) {
   this.val = val;
   this.next = null;
}

function TreeNode(val) {
    this.val = val;
    this.left = this.right = null;
}

const sortedListToBST = function(head) {
    let node = head,currentNode=head,len=0;
    while(node){
        len++;
        node=node.next;
    }
    function toBST(start,end){
        if(start > end) return null;
        let middle = parseInt((start+end)/2);
        let leftNode = toBST(start,middle-1);
        let node = new TreeNode(currentNode.val);
        node.left = leftNode;
        currentNode = currentNode.next;
        node.right = toBST(middle+1,end);
        return node;
    }
    return toBST(0,len-1);
};

let head = new ListNode(3);
head.next = new ListNode(5);
head.next.next = new ListNode(8);
sortedListToBST(head);