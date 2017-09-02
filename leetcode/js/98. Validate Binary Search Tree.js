/**
 * Created by heben on 2017/3/12.
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
 * @return {boolean}
 */

const isValidBST = function(root) {
    let result = [];
    function inorderTraversal(node){
        if(node == null) return;
        inorderTraversal(node.left);
        result.push(node.val);
        inorderTraversal(node.right);
        return ;
    }
    inorderTraversal(root);
    let len = result.length;
    for(let i=0;i<len-1;i++){
        if(result[i] >= result[i+1]) return false;
    }
    return true;
};