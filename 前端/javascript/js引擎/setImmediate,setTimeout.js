/**
 * Created by heben on 2017/9/6.
 */

var t1 = +new Date();
setImmediate(function () {
    console.log('1');
});
setTimeout(function () {
    console.log('2');
},10);

console.log('3');
var t2 = +new Date();
console.log('time: ' + (t2 - t1));