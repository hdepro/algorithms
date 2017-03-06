/**
 * Created by heben on 2017/2/28.
 */

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

