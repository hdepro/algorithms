/**
 * Created by heben on 2017/3/6.
 */

/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */

"use strict";///

// const wiggleSort = function(nums) {
//     let len=nums.length,temp=0;
//     for(let i=1;i<len;i=i+2){
//         if(nums[i]<=nums[i-1]){
//             temp=nums[i];
//             nums[i]=nums[i-1];
//             nums[i-1]=temp;
//         }
//         if(nums[i]<=nums[i+1]){
//             temp=nums[i+1];
//             nums[i+1]=nums[i];
//             nums[i]=temp;
//         }
//     }
//     return nums;
// };

const wiggleSort = function(nums) {
    let len=nums.length,temp=0;
    if(len<=1) return nums;
    let median = findKthLargest(nums,parseInt(len/2));
    let left = 0,right=len-1,i=0;

    function newIndex(i){
        return (1+2*i)%(len|1);   //1,3,5,0,2,4
    }
    function swap(i,j){
        temp = nums[i];
        nums[i] = nums[j];
        nums[j] = temp;
    }

    while(i<=right){
        if(nums[newIndex(i)] > median){
            swap(newIndex(i++),newIndex(left++));
        }else if(nums[newIndex(i)]<median){
            swap(newIndex(i),newIndex(right--));
        }else{
            i++;
        }
    }

    return nums;
};

console.log(wiggleSort([1, 5, 1, 3,2,1, 6, 4]));
//console.log(wiggleSort([1, 3, 2, 2, 3, 1]));
console.log(wiggleSort([1, 2,1,2,1,1,1,2,2,2]));
console.log(wiggleSort([1, 2,1,2,1,2,1]));
console.log(wiggleSort([1]));

