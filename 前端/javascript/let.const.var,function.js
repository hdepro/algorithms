/**
 * Created by heben on 2017/3/9.
 */

//let,const有块作用域,不存在变量提升,存在暂时性死区(typeof 不再安全)，不允许重复声明;
// var没有块作用域，存在变量提升
//闭包会引用包含函数的整个活动对象

console.log(typeof not_defined);
//console.log(not_defined);  //报错

var tmp = new Date();
function f(){
    console.log(tmp);
    if (false) {
        var tmp = 'hello world';
    }
}
f();

sayHi1();
function sayHi1(){
    console.log("sayHi1");
}

// sayHi2();      //报错
// var sayHi2 = function (){
//     console.log("sayHi2");
// };

name="the window";

var object={
    name:"my Object",
    getName:function(){
        return this.name;
    }
};

console.log(object.getName());
console.log((object.getName = object.getName)());
var s = object.getName;
console.log(s());