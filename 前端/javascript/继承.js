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


