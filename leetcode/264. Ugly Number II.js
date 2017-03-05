/**
 * Created by heben on 2017/3/5.
 */

/**
 * @param {number} n
 * @return {number}
 */

"use strict";

const nthUglyNumber = function(n) {
    let result = [1],L1=[1],L2=[1],L3=[1];
    let i=0,j=0,k=0;
    if(n==1) return 1;
    while(1){
        let min = Math.min(2*L1[i],3*L2[j],5*L3[k]);
        if(min == 2*L1[i]) i++;
        if(min == 3*L2[j]) j++;
        if(min == 5*L3[k]) k++;
        L1.push(min);
        L2.push(min);
        L3.push(min);
        result.push(min);
        if(result.length == n) return min;
    }
};

console.log(nthUglyNumber(4));