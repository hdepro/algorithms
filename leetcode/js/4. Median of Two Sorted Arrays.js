/**
 * Created by heben on 2017/3/1.
 */


/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number}
 */

"use strict";

function findKthNum(nums1, nums2,k){
    // console.log("k = "+k);
    // console.log("nums1 = "+nums1);
    // console.log("nums2 = "+nums2);
    let length1 = nums1.length;
    let length2 = nums2.length;
    let a1 = nums1,a2 = nums2,flag = Math.floor(k/2-1);

    if(k == 1){
        return Math.min(nums1[0] || nums2[0],nums2[0] || nums1[0]);
    }

    if(length1 <= flag){
        a2 = nums2.slice(k/2);
    }else if(length2 <= flag){
        a1 = nums1.slice(k/2);
    }else if(nums1[flag] < nums2[flag]){
        a1 = nums1.slice(k/2);
    }else{
        a2 = nums2.slice(k/2);
    }

    return findKthNum(a1,a2,k- Math.floor(k/2));
}

const findMedianSortedArrays = function(nums1, nums2) {

    let k = nums1.length+nums2.length;
    if(k%2 == 0){
        return (findKthNum(nums1,nums2,k/2) + findKthNum(nums1,nums2,k/2+1))/2;
    }else{
        return findKthNum(nums1,nums2,Math.ceil(k/2));
    }
};

console.log(findMedianSortedArrays([1],[2,6,8,15,16,22]));