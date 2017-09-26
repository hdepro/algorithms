/**
 * Created by heben on 2017/4/14.
 */

let func1 = function(x){
    console.log(arguments);
    return x++;
};

let func2 = x => {
    console.log(arguments[0]);
    return x++;
};

console.log(func1 instanceof Function);
console.log(func2 instanceof Function);

func1(2);
func2(2);
console.log(func1.prototype);
console.log(func2.prototype);
//箭头函数的作用域中的this在创建的时候就已经确定
//箭头函数内部没有constructor方法，也没有prototype，所以不支持new操作，也无法通过arguments拿到参数

var x = 1,
    o = {
        x : 10,
        test : () => this.x
    };

console.log(o.test()); // 1
console.log(o.test.call(o)); // 依然是1

// var o = {
//     x : 1,
//     func : function() { console.log(this.x) },
//     test : function() {
//         setTimeout(() => { this.func() }, 100);
//     }
// };
//
// o.test();

function f(){ return f; }
console.log(new f() instanceof f);//false
console.log(new f() == f);//true
function g(){}
console.log(new g() instanceof g);//true