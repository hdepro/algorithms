/**
 * Created by heben on 2017/3/27.
 */

function TreeNode(val) {
    this.val = val;
    this.left = this.right = null;
}

const root = new TreeNode(1);
root.left = new TreeNode(3);
root.right = new TreeNode(2);

root.left.left = new TreeNode(7);
root.left.right = new TreeNode(6);
root.right.left = new TreeNode(9);
root.right.right = new TreeNode(19);

root.right.left.left = new TreeNode(13);
root.right.left.right = null;
root.right.right.left = new TreeNode(4);



const preorderTraversal=function(root){
    var stack=[],result=[],node;
    if(root) stack.push(root);
    while(stack.length){
        node=stack.pop();
        result.push(node.val);
        if(node.right){
            stack.push(node.right);
        }
        if(node.left){
            stack.push(node.left);
        }
    }
    return result;
};

console.log(preorderTraversal(root));