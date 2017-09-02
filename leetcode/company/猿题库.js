/**
 * Created by heben on 2017/8/31.
 */

//实现一个栈，对栈内元素进行排序
function stackSort(arr){
    let stack = [],tmp1,tmp2;
    while(arr.length){
        tmp1 = arr.pop();
        while(true){
            if(!stack.length){
                stack.push(tmp1);
                break;
            }
           tmp2 = stack.pop();
           if(tmp1 <= tmp2){
               stack.push(tmp2);
               stack.push(tmp1);
               break;
           }else{
               arr.push(tmp2);
           }
        }
    }
    return stack;
}
console.log(stackSort([1,5,4,6,3,7,2]));

//给定一个有序（非降序）数组A，可含有重复元素，求最大的i使得A[i]等于target，不存在则返回-1
function BinarySearchMax(arr,value){
    let len = arr.length;
    let start=0,end=len-1,mid;
    while(start<=end){
        mid = parseInt((start+end)/2);
        if(arr[mid] === value){
            if(mid+1<=end && arr[mid+1] === value){
                start = mid+1;
            }else{
                return mid;
            }
        }else if(arr[mid] < value){
            start = mid+1;
        }else{
            end = mid - 1;
        }
    }
}

console.log(BinarySearchMax([1,3,3,4,6,7],3));

//