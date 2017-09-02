/**
 * Created by heben on 2017/2/28.
 */

/**
 * @param {string} s
 * @return {number}
 */

"use strict";

const lengthOfLongestSubstring = function(s) {
    const length = s.length;
    let max_length = 0,findingString = "",index = 0;
    for(let i = 0;i < length;i++){
        index = findingString.indexOf(s.charAt(i));
        if(index == -1){
            findingString += s.charAt(i);
        }else{
            if(findingString.length > max_length){
                max_length = findingString.length
            }
            findingString = findingString.slice(index+1)+s.charAt(i);
        }
        //console.log("find = "+findingString)
    }
    return Math.max(findingString.length , max_length);
};

console.log(lengthOfLongestSubstring("pwwkew"));