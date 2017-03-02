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
