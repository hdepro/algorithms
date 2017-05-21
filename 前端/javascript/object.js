/**
 * Created by heben on 2017/3/20.
 */

//工厂模式
console.log("工厂模式-------------------------------------");
(function() {
    function Person(name, age) {
        const obj = new Object();
        obj.name = name;
        obj.age = age;
        obj.sayName = function () {
            console.log("name= " + this.name);
        };
           return obj;
    }
    const person1 = Person("heben1", 23);
    person1.sayName();
    console.log(person1.constructor == Person);
})();


//构造函数模式
console.log("构造函数模式-------------------------------------");
(function() {
    function Person(name, age) {
        this.name = name;
        this.age = age;
        this.sayName = function () {
            console.log("name= " + this.name);
        };
    }

    const person1 = new Person("heben1", 23);
    person1.sayName();
    console.log(person1.constructor == Person);
    console.log(person1.__proto__ == Person.prototype);
})();


//寄生模式
console.log("寄生模式-------------------------------------");
(function() {
    function Person(name, age) {
        const obj = new Object();
        obj.name = name;
        obj.age = age;
        obj.sayName = function () {
            console.log("name= " + this.name);
        };
        return obj;
    }

    const person1 = new Person("heben1", 23);
    person1.sayName();
    console.log(person1.constructor == Person);
    console.log(person1 instanceof Person);
    console.log(person1.__proto__ == Person.prototype);
})();




