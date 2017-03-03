/**
 * Created by heben on 2017/3/3.
 */


/**
 * @param {string} s
 * @return {boolean}
 */

"use strict";

const isValid = function(s) {
    let record = [],length=s.length;
    function isMatch(c1,c2){
       return c1 == "(" && c2 == ")" || c1 == "{" && c2 == "}" || c1 == "[" && c2 == "]";
    }
    let i=0;
    while(i<length){
        if(isMatch(record[record.length-1],s[i])){
            record.pop();
        }else{
            record.push(s[i]);
        }
        i++;
    }
    return !record.length;
};

console.log(isValid("()[]{}"));
console.log(isValid("()({}[])[(]"));
