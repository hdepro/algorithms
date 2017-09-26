/**
 * Created by heben on 2017/9/13.
 */

console.log(null > 0);
console.log(null < 0);
console.log(null == 0);
console.log(null >= 0);
console.log(null <= 0);

console.log("Object.prototype = ",Object.prototype);
console.log("Object.__proto__ = ",Object.__proto__);
console.log("Function.__proto__ = ",Function.__proto__);
console.log("Array.__proto__ = ",Array.__proto__);

let obj = Object.create(Object.prototype);
console.log(Object.prototype.constructor);
console.log(obj.constructor);

let obj2 = Object();
console.log("obj2 = ",obj2.constructor);

function fn(m,n){
    console.log(n);
    return {
        fn:function(k){
            return fn(++k,m++);
        }
    }
}
let f = fn(0);
f.fn(1);
f.fn(2);
f.fn(3);

let a=fn(0).fn(1).fn(2).fn(3);

let obj_z = {};
let obj_a = [];
function Person(){};
let obj_p = new Person();
console.log(obj_z,obj_p);
console.log(JSON.stringify(obj_z),JSON.stringify(obj_p));
console.log(obj_z.toString(),obj_p.toString());
console.log(Object.getPrototypeOf(obj_z));
console.log(Object.getPrototypeOf(obj_z));
console.log(Object.getPrototypeOf(obj_z) == Object.prototype);
console.log(Object.getPrototypeOf(obj_p) == Object.prototype);

let func = function(){};
console.log(func.__proto__ === Function.prototype);
console.log(function(){}.__proto__ === Function.prototype);