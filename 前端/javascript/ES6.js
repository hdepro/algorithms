/**
 * Created by heben on 2017/3/15.
 */
"use strict";

const bar = Symbol('bar');
const snaf = Symbol('snaf');

class myClass{
    // 公有方法
    foo(baz) {
        this[bar](baz);
    }
    // 私有方法
    [bar](baz) {
        console.log(bar);
        return this[snaf] = baz;
    }
    // ...
}
const my=new myClass();
my.foo();
my[bar]();

console.log([...new Set([1,2,3,4,3,5,4,5])]);
// console.log([1,2,3,4,3,5,4,5].keys());
// console.log([1,2,3,4,3,5,4,5].values());
// console.log([1,2,3,4,3,5,4,5].entries());

const aa=Symbol("aas");
const bb=Symbol.for("aas");
console.log(aa === bb);
console.log(Symbol.for("aas") === bb);

console.log([1,2,3,4,3,5,4,5].map(a=>{
    let tmp = Symbol(a);
    if(Symbol.for(a) === tmp) return a;
}));

//Promise的缺点：一旦创建无法取消，如果不设置回调函数，Promise内部抛出的错误不会反映到外部；
// 处于pending状态时无法得知到了那一步。

var a=[];
for(var i=0;i<10;i++){
    a[i]=function(){
        console.log(i);
    }
}
a[6]();


var b=[];
for(let j=0;j<10;j++){
    b[j]=function(){
        console.log(j);
    }
}
b[6]();