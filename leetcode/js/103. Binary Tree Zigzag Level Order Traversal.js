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
 * @return {number[][]}
 */

function TreeNode(val) {
    this.val = val;
    this.left = this.right = null;
}

const zigzagLevelOrder = function(root) {
    if(!root) return [];
    let queue = [root],level=[0],result=[[]],currentLevel=0;
    while(queue[0]){
        result[currentLevel].push(queue[0].val);
        if(queue[0].left) {
            queue.push(queue[0].left);
            level.push(level[0]+1);
        }
        if(queue[0].right) {
            queue.push(queue[0].right);
            level.push(level[0]+1);
        }
        queue.shift();
        level.shift();
        if(!level[0] && currentLevel%2) result[currentLevel].reverse();
        if(level[0]>currentLevel){
            if(currentLevel%2){
                result[currentLevel].reverse();
            }
            result[++currentLevel] = [];
        }
    }
    return result;
};


