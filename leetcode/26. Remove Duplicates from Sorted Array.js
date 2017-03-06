/**
 * Created by heben on 2017/3/4.
 */

/**
 * @param {number[]} nums
 * @return {number}
 */

"use strict";

const removeDuplicates = function(nums) {
    let j = 0;
    for(let i = 1;i<nums.length;i++){
        if(nums[i]!=nums[j]){
            nums[++j] = nums[i];
        }
    }
    return j+1;
};

console.log(removeDuplicates([1,1,2]));