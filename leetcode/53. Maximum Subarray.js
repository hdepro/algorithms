/**
 * Created by heben on 2017/8/21.
 */

/**
 * @param {number[]} nums
 * @return {number}
 */

const maxSubArray = function(nums) {
    let len = nums.length,sum = new Array(len);
    sum[0] = nums[0];
    let i=0,j=0,maxSum = nums[0];
    for(let i=1;i<len;i++){
        sum[i] = sum[i-1]+nums[i];
    }
    while(j<len){
        let tmpSum = sum[j] - sum[i]+nums[i];
        if(tmpSum > maxSum){
            maxSum = tmpSum;
        }else if(tmpSum < 0){
            i = ++j;
        }else{
            j++;
        }
    }
    return maxSum;
};
console.log(maxSubArray([1,3,-4,2,-5,6,4]));
console.log(maxSubArray([-2,1,-3,4,-1,2,1,-5,4]));