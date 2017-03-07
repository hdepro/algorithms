/**
 * Created by heben on 2017/3/7.
 */

/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {number} n
 * @return {TreeNode[]}
 */

"use strict";

function TreeNode(val) {
    this.val = val;
    this.left = this.right = null;
}

const generateTrees = function(n) {
    const tree = function(left,right){
        let result = [];
        if(left>right) result.push(null);
        for(let i=left;i<=right;i++){
            let leftResult = tree(left,i-1);
            let rightResult = tree(i+1,right);
            for(let j=0;j<leftResult.length;j++){
                for(let k=0;k<rightResult.length;k++){
                    let root = new TreeNode(i);
                    root.left = leftResult[j];
                    root.right = rightResult[k];
                    result.push(root);
                }
            }
        }
        return result;
    };
    if(n<1) return [];
    return tree(1,n);
};
