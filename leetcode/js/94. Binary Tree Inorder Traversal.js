/**
 * Created by heben on 2017/3/4.
 */

/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */

/**
 * @param {TreeNode} root
 * @return {number[]}
 */

function TreeNode(val) {
    this.val = val;
    this.left = this.right = null;
}

"use strict";

const inorderTraversal = function(root) {
    let result = [],stack=[],m=0;
    if(root) stack.push(root);
    while(stack.length){
        let currentNode = stack[stack.length-1];
        if(currentNode.left){
            stack.push(currentNode.left);
            currentNode.left = null;
        }else if(currentNode.right){
            result.push(stack.pop().val);
            stack.push(currentNode.right);
        }else{
            result.push(stack.pop().val);
        }
    }
    return result;
};

const root = new TreeNode(1);
root.left = null;
root.right = new TreeNode(2);
root.right.left = new TreeNode(3);
root.right.right = null;
console.log(inorderTraversal(root));

