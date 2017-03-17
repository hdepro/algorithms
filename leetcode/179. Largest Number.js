/**
 * Created by heben on 2017/3/17.
 */

const largestNumber = function(nums) {
    let scur="",snext="",len;
    if(nums.every(num => num == 0)) return "0";
    nums.sort((cur,next)=>{
        scur=cur+"";
        snext=next+"";
        if(scur+snext>=snext+scur){
            return -1;
        }else{
            return 1;
        }
    });
    return nums.join("");
};

console.log(largestNumber([3, 30, 34, 5, 9]));
console.log(largestNumber([0,0]));