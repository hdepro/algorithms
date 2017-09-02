/**
 * Created by heben on 2017/3/3.
 */



/**
 * @param {string} digits
 * @return {string[]}
 */

"use strict";



const letterCombinations = function(digits) {
    const common = ["","","abc","def","ghi","jkl","mno","pqrs","tuv","wxyz"];
    let result = [],m=0;
    const recursion = function(deep){
        if(deep == digits.length) {
            m++;
            return ;
        }
        let s = result[m] || "";
        for(let i=0;i<common[digits[deep]].length;i++){
            result[m] = s+common[digits[deep]][i];
            recursion(deep+1);
        }
    };
    recursion(0);
    return result;
};

console.log(letterCombinations("234"));

