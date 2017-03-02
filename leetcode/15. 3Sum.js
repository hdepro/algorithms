/**
 * Created by heben on 2017/3/2.
 */


/**
 * @param {number[]} nums
 * @return {number[][]}
 */

"use strict";

const mergeSort = function(nums){
    let length= nums.length;
    for(let i = 1;i<=length;i = i*2){
        let temp = [];
        for (let j = 0;j<length;j = j+i*2){
            let k = 0,m = i,c = 0;
            while(k<i || m < Math.min(i*2,length) && j+m < length){
                if((nums[k+j] > nums[m+j] || k == i) && m != i*2){
                    temp[j+c++] = nums[j+m++];
                }else{
                    temp[j+c++] = nums[j+k++];
                }
            }
        }
        nums = temp;
    }
    return nums;
};

const threeSum = function(nums) {
    let length= nums.length;
    let sum = new Array();
    for(let i=0;i<length;i++){
        sum[i] = new Array();
        for(let j = i;j<length;j++){
            sum[i][j] = nums[i]+nums[j];
        }
    }

};


console.log(mergeSort([1,4,3,5,6,8,-2,9,6,0,-1,3]));
