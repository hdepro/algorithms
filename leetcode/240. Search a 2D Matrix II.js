/**
 * Created by heben on 2017/3/4.
 */

/**
 * @param {number[][]} matrix
 * @param {number} target
 * @return {boolean}
 */

"use strict";

const searchMatrix = function(matrix, target) {

    let bb = matrix.length -1,rr = matrix[0] && matrix[0] instanceof Array && matrix[0].length-1 || 0;
    const divideConquer = function(left,top,right,bottom){
        let s = Math.min(right-left,bottom-top);
        let l = 0,r = s,middle = 0;
        while(l<=r){
            middle = parseInt((l+r)/2);
            if(matrix[left+middle][top+middle] == target || matrix[left+r][top+r] == target) return true;
            if(r-l<=1){
                if(target>matrix[left+r][top+r]){
                    return top+r+1 <= bottom && divideConquer(left,top+r+1,left+r,bottom) ||
                    left+r+1 <= right && divideConquer(left+r+1,top,right,top+r);
                }else if(target > matrix[left+l][top+l]){
                    if(divideConquer(left,top+r,left+l,bottom)) return true;
                    if(divideConquer(left+r,top,right,top+l)) return true;
                }
                break;
            }
            if(matrix[left+middle][top+middle] < target){
                l=middle;
            }else{
                r=middle;
            }
        }
    };

    if(divideConquer(0,0,bb,rr)) return true;
    else return false;
};

let input = [
    [1,   4,  7, 11, 15],
    [2,   5,  8, 12, 19],
    [3,   6,  9, 16, 22],
    [10, 13, 14, 17, 24],
    [18, 21, 23, 26, 30]
];

input = [[1,1]];
console.log(searchMatrix(input,26));
console.log(searchMatrix(input,20));
console.log(typeof input[0]);
console.log(input[0] instanceof Array);
console.log(input[0] instanceof Object);
const ii = [1];
console.log(typeof ii[0]);
console.log(ii[0] instanceof Number);