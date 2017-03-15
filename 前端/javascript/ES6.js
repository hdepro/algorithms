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