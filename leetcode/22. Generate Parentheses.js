/**
 * Created by heben on 2017/3/3.
 */

/**
 * @param {number} n
 * @return {string[]}
 */

"use strict";

const generateParenthesis = function(n) {
    let result = [],m=0;
    const backTracking = function(left,right){
        if(right == n) {
            m++;
            return;
        }
        let s = result[m] || "";
        if(right <= left && left < n){
            result[m] = s+"(";
            backTracking(left+1,right);
        }
        if(right < left){
            result[m] =s + ")";
            backTracking(left,right+1);
        }
    };
    backTracking(0,0);
    return result;
};

console.log(generateParenthesis(3));