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
 * @param {TreeNode} root
 * @param {number} sum
 * @return {number[][]}
 */

function TreeNode(val) {
    this.val = val;
    this.left = this.right = null;
}

const pathSum = function(root, sum) {
    const pathTree = function(node,isum){
        let result=[];
        if(node == null){
            return [];
        }
        let nodeValue = node.val;
        let leftResult = pathTree(node.left,isum-nodeValue);
        let rightResult = pathTree(node.right,isum-nodeValue);
        for(let i=0;i<leftResult.length;i++){
            leftResult[i].unshift(nodeValue);
            result.push(leftResult[i]);
        }
        for(let i=0;i<rightResult.length;i++){
            rightResult[i].unshift(nodeValue);
            result.push(rightResult[i]);
        }

        if(node.left == null && node.right == null && nodeValue == isum) return[[nodeValue]];

        return result;
    };
    return pathTree(root,sum);
};

console.log(pathSum(null));

