/**
 * Created by heben on 2017/3/2.
 */

/**
 * @param {number[]} height
 * @return {number}
 */
///
"use strict";

// const maxArea = function(height) {
//     let length = height.length;
//     let max = 0;
//     for(let i = 0;i<length;i++){
//         let left = 0,right = length - 1;
//         while(left < i || i < right){
//             if(Math.max(max,(i-left)*height[i],(right-i)*height[i]) == max) break;
//             if(height[left] >= height[i] && left < i){
//                 max = Math.max(max,(i-left)*height[i]);
//                 left = i;
//             }else{
//                 left++;
//             }
//             if(height[right] >= height[i] && i<right){
//                 max = Math.max(max,(right-i)*height[i]);
//                 right = i;
//             }else{
//                 right--;
//             }
//         }
//     }
//     return max;
// };


const maxArea = function(height) {
    let length = height.length,i = 0,j=length-1;
    let max = 0;
    while(i<j){
        max = Math.max(max,(j-i)*Math.min(height[i],height[j]));
        if(height[i] < height[j]){
            i++;
        }else{
            j--;
        }
    }
    return max;
};