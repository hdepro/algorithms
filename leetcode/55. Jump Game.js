/**
 * Created by heben on 2017/3/5.
 */

/**
 * @param {number[]} nums
 * @return {boolean}
 */

const canJump = function(nums) {
    let len = nums.length,j=len-1;
    for(let i=len-2;i>=0;i--){
        if(nums[i]>=(j-i)){
            j=i;
        }
    }
    return j==0;
};

console.log(canJump([2,3,1,1,4]));
console.log(canJump([3,2,1,0,4]));