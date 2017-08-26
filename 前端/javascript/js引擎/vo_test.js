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


//变量是进入上下文阶段放入VO中
//变量声明在顺序上跟在函数声明和形式参数声明之后，而且在这个进入上下文阶段，变量声明不会干扰VO中已经存在的同名函数声明或形式参数声明
//在函数执行上下文中，VO是不能直接访问的，此时由活动对象(activation object,缩写为AO)扮演VO的角色

//函数的作用域链在定义阶段就已经创建了
function closure(){
    let tet = 10;
    //let tet2 = 10;
    return function(){
        //console.log(this);
        let t = tet;
        console.log("t = ",t);
        console.log("tet2 = ",tet2);
    }
}

var tFunc = closure();
var tet = 100;
function tClosure(){
    //console.log(this);
    var tet2 = 100;
    tFunc();
}
tClosure();

