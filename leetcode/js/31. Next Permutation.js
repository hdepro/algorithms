/**
 * Created by heben on 2017/3/19.
 */

/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var nextPermutation = function(nums) {
    let len=nums.length;
    for(var i=len-1;i>0;i--){
        if(nums[i]>nums[i-1]) break;
    }
    if(i==0) {
        nums.reverse();
    }else{
        let temp=0,start=i,end=len-1;
        while(start<=end){
            let middle = parseInt((start+end)/2);
            if(nums[middle] > nums[i-1]){
                start = middle+1;
            }else{
                end = middle-1;
            }
        }
        let value=Math.min(start,end);
        temp=nums[value];
        nums[value]=nums[i-1];
        nums[i-1]=temp;
        for(let j=i;j<=(len-1+i)/2;j++){
            temp=nums[j];
            nums[j]=nums[len+i-j-1];
            nums[len+i-j-1]=temp;
        }
    }
    return nums;
};

console.log(nextPermutation([1,3,2]));
console.log(nextPermutation([1,1,5]));
console.log(nextPermutation([5,3,2]));
console.log(nextPermutation([2,3,4,1,5,6,7,8,0,9]));