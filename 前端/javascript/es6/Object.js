/**
 * Created by heben on 2017/3/22.
 */

console.log(Object.is("foo","foo"));
console.log(Object.is({},{}));

console.log(Object.is(+0,-0));
console.log(Object.is(NaN,NaN));

const cart = {
    _wheels: 4,
    get wheels () {
        return this._wheels;
    },
    set wheels (value) {
        if (value < this._wheels) {
            throw new Error('数值太小了！');
        }
        this._wheels = value;
    }
};
console.log(cart.wheels);

const keyA = {a: 1};
const keyB = {b: 2};
const myObject = {
    [keyA]: 'valueA',
    [keyB]: 'valueB'
};
console.dir(myObject);  //自动将字符串转换成"[object object]";


console.log((new Function()).name); // "anonymous"
const doSomething = function() {
    // ...
};
console.log(doSomething.bind().name); // "bound doSomething"


//Object.assign方法执行的是浅拷贝，也就是说，如果源对象某个属性的值是对象，那么目标对象拷贝得到的是这个对象的引用
var v1 = 'abc';
var v2 = true;
var v3 = 10;
var obj = Object.assign({}, v1, v2, v3);
console.log(obj); // { "0": "a", "1": "b", "2": "c" }

console.log(Object.assign([1, 2, 3], [4, 5]));


// for...in循环：只遍历对象自身的和继承的可枚举的属性
// Object.keys()：返回对象自身的所有可枚举的属性的键名
// JSON.stringify()：只串行化对象自身的可枚举的属性
//ES6新增了一个操作Object.assign()，会忽略enumerable为false的属性
//这四个操作之中，只有for...in会返回继承的属性

const func5 = function(){};
console.log(new func5());

// const func6 = ()=>{};
// console.log(new func6());   //报错


// 总结：valueOf偏向于运算，toString偏向于显示。
// 1、 在进行对象转换时（例如:alert(a)）,将优先调用toString方法，如若没有重写toString将调用valueOf方法，如果两方法都不没有重写，但按Object的toString输出。
// 2、 在进行强转字符串类型时将优先调用toString方法，强转为数字时优先调用valueOf。
// 3、 在有运算操作符的情况下，valueOf的优先级高于toString。

//console.log(Object.entries({name:'heben',age:24}));   [["name","heben"],["age",24]]

//let { x, y, ...z } = { x: 1, y: 2, a: 3, b: 4 };

function Person(instance1,instance2,instance3){
    this.instance1=instance1;
    this.instance2=instance2;
    this[Symbol(instance3)]=instance3;
}

Person.prototype.proto1 = "proto1";
Person.prototype.proto2 = "proto2";
Person.prototype[Symbol("proto3")] = "proto3";

const person1 = new Person(1,2,3);
console.log(Object.keys(person1));
console.log(Reflect.ownKeys(person1));
const forKeys = {};
for(var p in person1){
    forKeys[p] = person1[p];
}
console.log(forKeys);