/**
 * Created by heben on 2017/3/6.
 */

/**
 * @param {number[]} nums
 * @return {number}
 */
//////
"use strict";

const singleNumber = function(nums) {
    const len=nums.length;
    if(len==1) return nums[0];
    let a=nums[0],b=nums[1],c=nums[2],p=0,q=0;
    for (let i=3;i<len;i++){
        p = ~~(~(a^b)^c);
        //q = !(a&b&c | !(a|b|c));
        q = p|(~(a&b|c));
        console.log(p,q);
        a=p;
        b=q;
        c=nums[i];
    }
    return p|q;
};

console.log(singleNumber([3,3,3,2,2,2,1]));