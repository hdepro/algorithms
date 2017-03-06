/**
 * Created by heben on 2017/3/4.
 */

"use strict";

/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */

const findKthLargest = function(nums, k) {
    let len = nums.length,temp=0;
    const recursion = function(left,right){
        let i=left,j=right;
        while(i<j){

            // if(nums[i] < nums[i+1]){
            //     temp = nums[i];
            //     nums[i] = nums[i+1];
            //     nums[i+1] = temp;
            //     i++;
            // }else{
            //     temp = nums[j];
            //     nums[j] = nums[i+1];
            //     nums[i+1] = temp;
            //     j--;
            // }

            if(nums[i] < nums[right]){
                swap(i,--j);
            }else{
                i++
            }
        }
        swap(i,right);
        //console.log(nums);
        if(i==k-1) {
            return nums[i];
        }
        if(i<k-1){
            return recursion(i+1,right);
        }else{
            return recursion(left,i-1);
        }
    };

    function swap(i,j) {
        const tmp = nums[i];
        nums[i] = nums[j];
        nums[j] = tmp;
    }

    return recursion(0,len-1);
};


//console.log(findKthLargest([3,2,1,5,6,4],2));

