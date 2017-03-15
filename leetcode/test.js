/**
 * Created by heben on 2017/2/28.
 */

"use strict";

var map = {};

map[2] = 1;
console.log(map[3]);


var head = {val:1,next:null};
console.log(head.next);
var prevList = head;
prevList.next = {};
console.log(head.next);
console.log(4/10);

console.log(Math.floor(2));
console.log([1,2,3].slice(4.5));
console.log("123456".slice(1.5));


const a= [1,2,3];
const b = a;
a[2] =4;
console.log(b);
b[2] = 5;
console.log(a);

console.log(0 && 3 || 4 && 5);
console.log(parseInt("a"));
console.log("c" > "b");

var c= ['a','b','d','e','c'];
c.sort();
console.log(c[1.5]);
console.log("b"-"a");
console.log(parseInt(1.5));
if(null) console.log(11111);

console.log(Math.max(1,3,2,Infinity));
console.log(Math.min(1,3,2,a[4]));

console.log(Math.max(1,2,3));


let aobj={a:1,b:2};
let aarr=[];
aarr.push(aobj);
console.log(aarr)  ;
aobj.a=3;
console.log(aarr);

const or = 6;
console.log(6|1);
console.log(7|1);

console.log(Number(4.5));
console.log(+4.5);

console.log(6^7);
console.log(6&7);
console.log(~~(~(1^0)^0));

console.log(aobj.c+1);

if(NaN) console.log("NaN is true");
if(!NaN) console.log("NaN is false");
console.log(2||1);

console.log(Math.log2(10));
if(undefined <= 1) console.log("undefined > 1");
console.log(undefined <= 1);

console.log([1,2,3].concat(8));
console.log([].unshift(1));



// function Parent(){
//     this.age=50;
//     this.nums = [1,2,3];
// }
//
// Parent.prototype.name = "parent";
// Parent.prototype.friends = ["a","b"];
//
// Parent.prototype.getName = function(){
//     console.log(this.name);
// };
//
// Parent.prototype.setName = function(newName){
//     this.name = newName;
// };
//
// Parent.prototype.getFriend = function(){
//     console.log(this.friends);
// };
//
// Parent.prototype.setFriend = function(newFriend){
//     this.friends.push(newFriend);
// };
//
// function Child(){
// }
//
// Child.prototype = new Parent();
//
// let child1 = new Child();
// let child2 = new Child();
//
// child1.getName();
// child2.getName();
// child1.getFriend();
// child2.getFriend();
// child1.setName("parent1");
// child1.setFriend("c");
// child1.getName();
// child2.getName();
// child1.getFriend();
// child2.getFriend();
// child1.nums.push(4);
// child1.age = 24;
// console.log(child2.nums);
// console.log(child2.age);


// function Parent(){
//     this.name="default";
//     this.age=0;
//     this.getName=function(){
//         console.log(this.name);
//     }
// }
//
// Parent.prototype.getAge = function(){
//     console.log(this.age);
// };
//
// function Child(){
//     Parent.call(this);
// }
//
// let child1 = new Child();
// let child2 = new Child();
//
// child1.getName();
// child2.getName();
// child1.getAge();


function Parent(){
    this.name="default";
    this.age=0;
    this.nums = [1,2,3];
    this.getName=function(){
        console.log(this.name);
    }
}

Parent.prototype.friends = ["a","b"];

Parent.prototype.getAge = function(){
    console.log(this.age);
};


function Child(){
    Parent.call(this);
}

Child.prototype = new Parent();

let child1 = new Child();
let child2 = new Child();

child1.nums.push(4);
child1.friends.push("c");
console.log(child2.nums);
console.log(child2.friends);

{let arr1 = [1,2,3];
let arr2 = arr1,arr3=arr1;
arr1=[2,3,4];
console.log(arr2);
console.log(arr3);}

{let arr1 = [1,2,3];
let arr2 = arr1,arr3=arr1;
arr2=[2,3,4];
console.log(arr1);
console.log(arr3);}

{let arr1 = [1,2,3];
    let arr2 = arr1,arr3=arr1;
    arr2.push(4);
    console.log(arr1);
    console.log(arr3);}

{let arr1 = [1,2,3];
    let arr2 = arr1.slice(0,2),arr3=arr1;
    arr2.push(4);
    arr3.push(5);
    console.log(arr1);
    console.log(arr2);
    console.log(arr3);}

{let arr1 = [1,2,3,4,5];
    console.log(arr1.splice(1,2,...[11,16]));
    console.log(arr1);
    console.log([].shift());
    const s=[];
    s[0]=2,s[3]=5;
    //s[0]=undefined,s[3]=undefined;
    delete s[3];
    console.log(s[3]);
    console.log(s.length);
    console.log(undefined-1);
}




