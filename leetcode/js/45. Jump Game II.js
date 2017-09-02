/**
 * Created by heben on 2017/3/5.
 */

/**
 * @param {number[]} nums
 * @return {number}
 */

// const jump = function(nums) {
//     let len=nums.length,j=len-1,count=0;
//     while(j){
//         for(let i=0;i<j;i++){
//             if(nums[i] >= (j-i)){
//                 j=i;
//                 count++;
//             }
//         }
//     }
//     return count;
// };


const jump = function(nums) {
    let len=nums.length,compare=[len-1];
    for(let i=len-2;i>=0;i--){
        let j= compare.length;
        while(j){
            if(nums[i]<(compare[j-1]-i)) break;
            j--;
        }
        compare.splice(j+1);
        if(j!=compare.length) compare.push(i);
    }
    return compare.length-1;
};

console.log(jump([2,3,1,1,4]));
console.log(jump([2,3,1,1,1,4]));