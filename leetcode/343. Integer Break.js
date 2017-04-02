/**
 * Created by heben on 2017/4/2.
 */


/**
 * @param {number} n
 * @return {number}
 */
var integerBreak = function(n) {
    var section = parseInt(n/3),mod = n%3;
    if(section<2) return Math.floor(n/2)*Math.ceil(n/2);
    var product=1;
    if(mod==1) {
        product=4;
        section--;
    }else if(mod==2){
        product=2;
    }
    for(var i=0;i<section;i++){
       product*=3;
    }
    return product;
};
console.log(integerBreak(2));
console.log(integerBreak(5));
console.log(integerBreak(10));