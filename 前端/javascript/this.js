/**
 * Created by heben on 2017/3/16.
 */

(function(){
    console.log(this);   //global
})();

(function(){
    "use strict";
    console.log(this);
})();   //undefined

function test(){
    console.log(this.name);
}
const obj={
    name:'heben',
    foo:test
};
obj.foo();  //heben

const func = obj.foo;
func();   //undefined


function foo(){
    console.log(this);
}
//setTimeout(foo,1);   //如果没有传入this，自动注入this


// function Person(name){
//     this.name=name;
//     console.log(this);
// }
//
// const obj1={name:"heben222222222222"};
//
// const Person2 = Person.bind(obj1);   //bind的this不起作用
// const person = new Person2("heben");
// console.log(person);  //{name:"heben"}
// console.log(obj1);

function Person(name){
    this.name=name;
    console.log(this);
}

const obj1={name:"heben222222222222"};

const Person2 = Person.bind(obj1,"heben111111111111");   //bind的this不起作用,但参数起作用
const person = new Person2("heben");
console.log(person);  //{name:"heben1111111111111"}
console.log(obj1);


const afoo = a=>{
    console.log(a);
    console.log(this.name);  //箭头函数的this在定义时已确定，不可更改；
};
afoo(1);
const obj2={name:"obj"};
afoo(2);

(function(){
    "use strict";
    class Animal {
        constructor() {
            this.type = 'animal';
        }

        says1(say) {
            setTimeout(function () {
                console.log(this.type + ' says1 ' + say);
            }, 1000)
        }
        says2(say) {
            setTimeout(function () {
                console.log(this.type + ' says2 ' + say);
            }.bind(this), 1000)
        }
        says3(say) {
            setTimeout(()=>console.log(this.type + ' says3 ' + say), 1000)
        }
    }

    const animal = new Animal();
    animal.says1('hi');
    animal.says2('hi');
    animal.says3('hi');
})();