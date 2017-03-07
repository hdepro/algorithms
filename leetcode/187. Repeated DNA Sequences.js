/**
 * Created by heben on 2017/3/7.
 */

/**
 * @param {string} s
 * @return {string[]}
 */

"use strict";

const findRepeatedDnaSequences = function(s) {
    let len=s.length,obj = {},result=[];
    for(let i=0;i<len;i++){
        let key = s.substr(i,10);
        obj[key] = obj[key]+1 || 1;
    }
    for(var p in obj){
       if(obj[p]>1) result.push(p);
    }
    return result;
};

console.log(findRepeatedDnaSequences("AAAAACCCCCAAAAACCCCCCAAAAAGGGTTT"));
