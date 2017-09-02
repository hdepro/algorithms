/**
 * Created by heben on 2017/3/1.
 */

/**
 * @param {string} s
 * @param {number} numRows
 * @return {string}
 */

"use strict";

const convert = function(s, numRows) {
    if(numRows == 1) return s;

    let rate = 2*numRows - 2;
    let cols = Math.ceil(s.length / rate);
    let remain = s.length % rate;
    let result = [];

    if(remain != 0){
        for(let i = remain;i<rate;i++){
            s += "#";
        }
    }

    for(let i = 0;i<s.length;i++){
        let block = Math.floor(i/rate);
        let rm = i%rate;   //这个块中的第几个
        let rows = 0;
        if(rm / numRows < 1){
            rows = rm % numRows;
            if(rows != 0 && rows != numRows - 1){
                block = 2*block;
            }
        }else{
            rows = numRows - 2 - rm % numRows;
            block = 2*block+1;
        }
        if(rows == 0){
            result[block] = s[i];
        }else{
            result[(2*rows - 1)*cols+block] = s[i];
        }
    }

    return result.join("").replace(/#/g,"");

};

console.log(convert("PAYPALISHIRING", 3));
console.log(convert("PAYPALISHIRING", 2));
console.log(convert("PAYPALISHIRING", 1));
console.log("PAHNAPLSIIG#YIR#".replace(/#/g,""));
