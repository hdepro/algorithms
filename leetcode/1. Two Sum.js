/**
 * Created by heben on 2017/2/28.
 */


/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */

var twoSum = function(nums, target) {
    var map = {};
    var length = nums.length;
    for(var i=0;i<length;i++){
        if(map[target-nums[i]] != undefined){
            return[map[target-nums[i]],i]
        }else{
            map[nums[i]] = i;
        }
    }
};
twoSum([2, 7, 11, 15],9);
console.log(twoSum([2, 7, 11, 15],9));