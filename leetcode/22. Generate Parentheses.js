/**
 * Created by heben on 2017/3/3.
 */

/**
 * @param {number} n
 * @return {string[]}
 */

"use strict";

const generateParenthesis = function(n) {
    let result = ["()"],temp=[],k = 0;
    const recursion = function(m){
        if(m == 1) return;
        recursion(m-1);
        for(let i = 0;i<result.length;i++){
            temp.push("("+result[i]+")");
            if(result[i][0] == "(" && result[i][1] == ")"){
                temp.push("()"+result[i]);
            }else{
                temp.push("()"+result[i]);
                temp.push(result[i]+"()");
            }
        }
        result = temp;
        temp = [];
    };
    recursion(n);
    return result;
};

console.log(generateParenthesis(3));