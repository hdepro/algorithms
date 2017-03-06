/**
 * Created by heben on 2017/3/6.
 */

/**
 * @param {number[]} nums
 * @return {number[][]}
 */

"use strict";

const subsets = function(nums) {
    let len=nums.length,count=Math.pow(2,len),result=[];
    for(let i=0;i<count;i++){
        let m=0;result[i] = new Array();
        for(let j=i;j>0;j=parseInt(j/2)){
            if(j%2) result[i].push(nums[m]);
            m++;
        }
    }
    return result;
};

console.log(subsets([1,2,3]));