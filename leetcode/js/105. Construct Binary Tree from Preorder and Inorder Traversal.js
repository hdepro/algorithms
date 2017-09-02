/**
 * Created by heben on 2017/3/8.
 */

/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {number[]} preorder
 * @param {number[]} inorder
 * @return {TreeNode}
 */

function TreeNode(val) {
    this.val = val;
    this.left = this.right = null;
}

const buildTree = function(preorder, inorder) {
    if(preorder.length == 0) return null;
    let i=0;
    while(inorder[i] != preorder[0]){
        i++;
    }
    let leftTree = buildTree(preorder.slice(1,i+1),inorder.slice(0,i));
    let rightTree = buildTree(preorder.slice(i+1),inorder.slice(i+1));
    let root = new TreeNode(preorder[0]);
    root.left = leftTree;
    root.right = rightTree;
    return root;
};
