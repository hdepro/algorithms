/**
 * Created by heben on 2017/3/5.
 */
"use strict";
//11111111111111111111111
const string="";
const array=[];
const object={};

const object_string = new String();
const object_array = new Array();
const object_object = new Object();

console.log("string typeof "+typeof string);
console.log("array typeof "+typeof array);
console.log("object typeof "+typeof object);

console.log("object_string typeof "+typeof object_string);
console.log("object_array typeof "+typeof object_array);
console.log("object_object typeof "+typeof object_object);

console.log("string instanceof "+(string instanceof String));
console.log("array instanceof "+(array instanceof Array));
console.log("array instanceof "+(array instanceof Object));
console.log("object instanceof "+(object instanceof Object));

console.log("object_string instanceof "+(object_string instanceof String));
console.log("object_array instanceof "+(object_array instanceof Array));
console.log("object_array instanceof "+(object_array instanceof Object));
console.log("object_object instanceof "+(object_object instanceof Object));


//2222222222222222222222

let obj={},arr=[];
console.log(typeof obj === "object");
console.log(typeof arr === "object");
console.log(typeof null === "object");

console.log(Object.prototype.toString.call(obj));
console.log(Object.prototype.toString.call(arr));
console.log(Object.prototype.toString.call(null));

if([]) console.log("[] is true");
console.log([] == false);

function test(){
    console.log(this);
}
console.log(typeof test);
console.log(test instanceof Function);

const test2 = function(){};
console.log(typeof test2);
console.log(test2 instanceof Function);