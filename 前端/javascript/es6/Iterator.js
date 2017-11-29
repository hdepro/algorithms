/**
 * Created by heben on 2017/3/22.
 */

// const arr=["red","green","blue"];
// for(let i of arr){
//     console.log(i);
// }
// for(let i in arr){
//     console.log(i);
// }


let f = function(){};
let f2 = () => {};
console.log(f instanceof Function);
console.log(f2 instanceof Function);

let obj_create = Object.create(Object.prototype);
console.log(obj_create instanceof Object);
console.log(obj_create.__proto__  === Object.prototype);