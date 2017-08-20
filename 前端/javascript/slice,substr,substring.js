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

console.log(str.substring(3,2));
console.log(str.substring(2,3));
console.log(str.slice(3,2));
console.log(str.substr(2,-8));
console.log(str.substr(-6,3));