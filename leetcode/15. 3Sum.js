/**
 * Created by heben on 2017/3/2.
 */


/**
 * @param {number[]} nums
 * @return {number[][]}
 */

"use strict";

// const mergeSort = function(nums){
//     let length= nums.length;
//     for(let i = 1;i<=length;i = i*2){
//         let temp = [];
//         for (let j = 0;j<length;j = j+i*2){
//             let k = 0,m = i,c = 0;
//             while(k<i || m < Math.min(i*2,length) && j+m < length){
//                 if((nums[k+j] > nums[m+j] || k == i) && m != i*2){
//                     temp[j+c++] = nums[j+m++];
//                 }else{
//                     temp[j+c++] = nums[j+k++];
//                 }
//             }
//         }
//         nums = temp;
//     }
//     return nums;
// };

const mergeSort = function(nums){
    let length= nums.length;
    for(let i = 1;i<=length;i = i*2){
        let temp = [],left = 0,right = i;
        for (let j = 0;j<length;j++){
            let section = Math.floor(j/(2*i))*i*2;
            if(left<section+i && (nums[left] < nums[right] || right>=Math.min(length,section+2*i))){
                temp[j] = nums[left++];
            }else{
                temp[j] = nums[right++];
            }
            if(left==section+i && right==Math.min(length,section+2*i)){
                right = right + i;
                left = left+i;
            }
        }
        nums = temp;
    }
    return nums;
};


const threeSum = function(nums) {
    let length= nums.length;
    nums.sort((a,b)=>a-b);
    console.log(nums);
    let sum = new Array(),m = 0;
    for(let k=0;k<length;k++){
        if(nums[k]==nums[k-1] && k!=0) continue;
        let temp = nums;       //可以在此处去重
        let i = k+1,j = length-1;
        while(i<j){
            if(temp[i] + temp[j] + temp[k] > 0 || j==k){
                j--;
            }else if(temp[i] + temp[j] + temp[k] < 0 || i==k){
                i++;
            }else if(temp[i] + temp[j] + temp[k] == 0){
                sum[m++] = [temp[i],temp[j],temp[k]].sort((a,b)=>a-b);
                i++;
                j--;
                while(i<j && temp[i] == temp[i-1]) i++;
                while(i<j && temp[j] == temp[j+1]) j--;
            }
        }
    }
    return sum;
};

console.log(threeSum([-1, 0, 1, 2, -1, -4]));
console.log(threeSum([-4,-2,-2,-2,0,1,2,2,2,3,3,4,4,6,6]));

let s = [1,4,3,5,6,8,-2,9,6,0,-1,3,7,10,0];
console.log(s.sort());
console.log(s);


console.log([-4,-2].sort((a,b) => a-b));
console.log([2,4].sort((a,b) => a-b));