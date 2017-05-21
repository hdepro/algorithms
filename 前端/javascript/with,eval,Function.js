/**
 * Created by heben on 2017/5/21.
 */

//使用with，可能会产生意外的全局变量，性能严重下降，严格模式下无法使用
let obj={a:1,b:2};
with(obj){
    a=2;
    c=3;
    console.log(a);
}
console.log(c);

//使用eval，可读性非常差，存在作用域的问题，不容易调试，安全性问题可能存在xss攻击
e = 3;
function testEval(){
    let e = 4;
    eval("e = 5");
    console.log(e);
}
testEval();
console.log(e);

e2 = 3;
function testEval2(){
    let e2 = 4;
    let eva = eval;
    eva("e2 = 5");
    console.log(e2);
}
testEval2();
console.log(e2);