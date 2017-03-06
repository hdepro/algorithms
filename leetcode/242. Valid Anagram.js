/**
 * Created by heben on 2017/3/4.
 */

/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */

"use strict";

const isAnagram = function(s, t) {
    let object = {};
    for(let i = 0;i<s.length;i++){
        object[s[i]] = object[s[i]]?object[s[i]]+1:1;
    }
    for(let i = 0;i<t.length;i++){
        if(object[t[i]]) {
            object[t[i]]--;
            if(object[t[i]] == 0){
                delete object[t[i]];
            }
        }else return false;
    }

    for(let k in object){
        return false;
    }
    return true;
};

console.log(isAnagram("nagaram","anagram"));
console.log(isAnagram("nagat","anagr"));
console.log(isAnagram("a","ab"));
console.log(isAnagram("ab","a"));