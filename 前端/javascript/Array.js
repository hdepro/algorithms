/**
 * Created by heben on 2017/3/8.
 */

const arr=[1,5,10,6,23,3];
console.log(arr.sort());
console.log(arr.sort((a,b) => a-b));
console.log(arr.reduce((a,b) => a+b));

// 1.Math相关函数
// （1）.  Math.floor()  向下取整
// （2）. Math.ceil()    向上取整
// （3）. Math.round()  四舍五入
//
// 2.slice(),substring(),substr()
// (1)slice()方法(数组与字符串都有该方法)，第一个参数指定开始位置，第二个参数指定结束位置  [1,2,3,4,5,6].slice(2,4) = [3,4],
//     当参数为负数时自动加上数组长度
// (2)substring(字符串方法)方法，第一个参数指定开始位置，第二个参数指定结束位置  "123456".substring(2,4) = "34",当参数为负数时,转换成0
// (2)substr(字符串方法)方法，第一个参数指定开始位置，第二个参数指定截取长度 "123456".substring(2,4) = "3456",当参数为负数时，
// 第一个负数参数加上长度，第二个负数参数转换成0

//将arguments转换成数组
function testFunc(){
    console.log("arguments = "+JSON.stringify(arguments));
    console.log("arguments slice call arr = "+JSON.stringify(Array.prototype.slice.call(arguments)));
    console.log("arguments slice apply arr = "+JSON.stringify(Array.prototype.slice.apply(arguments)));
    console.log("arguments concat arr = "+JSON.stringify(Array.prototype.concat.apply([],arguments)));
    console.log("arguments Array arr = "+JSON.stringify(Array.apply([],arguments)));

    console.log("arguments Array from = "+JSON.stringify(Array.from(arguments)));
    console.log("arguments Array of = "+JSON.stringify(Array.of(...arguments)));
}

testFunc(1,2,3);

var arr1="john".split('');
var arr2=arr1.reverse();
var arr3="jones".split('');
console.log("arr1 = "+arr1+" arr2 = "+arr2+" arr3 = "+arr3);
arr2.push(arr3);
console.log("arr1 = "+arr1+" arr2 = "+arr2+" arr3 = "+arr3);

