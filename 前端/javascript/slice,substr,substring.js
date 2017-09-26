/**
 * Created by heben.hb on 2017/7/27.
 */


let str = "0123456789";
{
    let slice_str = str.slice(2,3);
    console.log(slice_str);
    let substring_str = str.substring(2,3);
    console.log(substring_str);
    let substr_str = str.substr(2,3);
    console.log(substr_str);
    console.log(str);}

let slice_str = str.slice(2,-3);
console.log(slice_str);
let substring_str = str.substring(2,-3);
console.log(substring_str);
let substr_str = str.substr(-2,-3);
console.log(substr_str);

console.log("str.substring(3,2) = ",str.substring(3,2));
console.log(str.substring(2,-3));
console.log(str.slice(3,2));
console.log(str.substr(2,-8));
console.log(str.substr(-6,3));

//substr将第一个负数加上字符串长度，第二个负数转成0，第二个参数表示截取的长度
//substring将负数转为0，第一个表示开始位置，第二个表示结束位置，并且如果第一个数比第二个数大会交换两个参数
//slice将负数转为本身加上数组长度，第一个表示开始位置，第二个表示结束位置，并且如果第一个数比第二个数大会返回没有结果