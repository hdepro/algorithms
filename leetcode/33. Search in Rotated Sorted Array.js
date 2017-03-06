/**
 * Created by heben on 2017/3/4.
 */

/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
//
"use strict";

const search = function(nums, target) {
    let len = nums.length,left = 0,right = len - 1,middle = 0;
    while(left <= right){
        middle = parseInt((left+right)/2);
        if(target == nums[middle]) return middle;
        if(nums[left] < nums[right]){
            if(target < nums[middle]){
                right = middle - 1;
            }else{
                left = middle + 1;
            }
        }else if(nums[left] <= nums[middle]){
            if(nums[middle] < target || target <= nums[right]){
                left = middle+1;
            }else{
                right = middle-1;
            }
        }else{
            if(nums[left] <= target || target < nums[middle]){
                right = middle-1;
            }else{
                left = middle+1;
            }
        }
    }
    return -1;
};

console.log(search([1,2,3,4,6,7,8],4));
console.log(search([1,2,3,4,5,6,7,8],5));
console.log(search([4,5,6,7,8,1,2,3],5));
console.log(search([3,1],1));