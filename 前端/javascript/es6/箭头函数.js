/**
 * Created by heben on 2017/4/14.
 */

let func1 = function(x){
    console.log(arguments);
    return x++;
};

let func2 = x => {
    console.log(arguments);
    return x++;
};

console.log(func1 instanceof Function);
console.log(func2 instanceof Function);

func1(2);
func2(2);
console.log(func1.prototype);
console.log(func2.prototype);
//箭头函数的作用域中的this在创建的时候就已经确定