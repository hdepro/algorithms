/**
 * Created by heben on 2017/4/16.
 */


console.log(x); //function
var x = 10;
x = 20;
function x() {}
console.log(x);    //20


function test(a, b) {
    var c = 20;
    console.log(a);//结果是什么？为什么？
    function a(){}
    var e = function _e(){};
    (function x(){});
}
test(30);   //function


function test2(a, b) {
    var c = 20;
    console.log(a);//结果是什么？为什么？
    var a=40;
}
test2(30);   //function