/**
 * Created by heben on 2017/3/13.
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

function TreeNode(val) {
   this.val = val;
   this.left = this.right = null;
}

const isBalanced = function(root) {
    let bool = true;
    function deepth(node){
        if(node == null) return 0;
        let left_depth = deepth(node.left);
        let right_depth = deepth(node.right);
        if(Math.abs(left_depth-right_depth) > 1) bool = false;
        node.deep = Math.max(left_depth+1,right_depth+1);
        return node.deep;
    }
    deepth(root);
    return bool;
};
