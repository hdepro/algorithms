/**
 * Created by heben on 2017/3/5.
 */


//1.通过继承为数组定义min,max方法
Array.prototype.max = function(){
    return Math.max.apply(null,this);
};

Array.prototype.min = function(){
    return Math.min.apply(null,this);
};

console.log([1,2,3].min());

//1.构造函数模式
function Person(name,age){
    this.name=name;
    this.age=age;
    this.sayName=function(){
        console.log(this.name);
    };
}

const person1 = new Person("person1",1);
const person2 = new Person("person2",2);
person1.sayName();
person2.sayName();


//2.原型对象
function People(){

}

People.prototype.name = "default";
People.prototype.age = 0;
People.prototype.sayName = function(){
    console.log(this.name);
};
People.prototype.sayAge = function(){
    console.log(1);
};
// People.prototype={
//     constructor:Person,
//     name:"default",
//     age:0,
//     sayName:function(){
//         console.log(this.name);
//     }
// };

const people1 = new People();
const people2 = new People();
people1.sayName();
people2.sayName();

people1.sayAge();
people2.sayAge();

people1.sayAge = function(){
    console.log(2);
};
people1.sayAge();
people1.__proto__.sayAge();

//hasOwnProperty检测自己的属性，in检测自己和原型的属性

const obj={
    name:"heben",
    age:24,
    sayName:function(){
        console.log(this.name);
    }
};
obj.sayName();
const sayName = obj.sayName;
sayName();





