/**
 * Created by heben on 2017/3/14.
 */
"use strict";

Array.prototype.reduce2=function(func){
    let len = this.length,i=1,a=this[0],b=this[1];
    while(i<len){
        a = func(a,b);
        b = this[++i];
    }
    return a;
};

console.log([1,2,3].reduce((a,b)=>(a*b)));
console.log([1,2,3].reduce2((a,b)=>(a-b)));

const arr=new Array();
console.log(arr instanceof Array);
console.log(arr instanceof Object);
console.log(arr.__proto__ === Array.prototype);
console.log(arr.__proto__ === Object.prototype);
console.log(arr.constructor === Array);
console.log(arr.constructor === Object);
console.log(arr.__proto__.constructor === Array);
console.log(arr.__proto__.constructor === Object);
console.log(arr.constructor === Array.prototype.constructor);
console.log(arr.constructor === Object.prototype.constructor);
console.log(Array.prototype.constructor === Array);

function A(){
    const obj = new Object();
    function F(){};
    F.prototype=obj;
    return new F();
}

console.log(A());
console.log(new A());

console.log([] == false);
console.log({} == false);
if([]) console.log("[] is true");
if({}) console.log("{} is true");


