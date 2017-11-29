/**
 * Created by heben on 2017/3/20.
 */

//1.实现lodash的debounce函数

function cb(timer){
    console.log(new Date().getTime());
}

function debounce_test(callback,time){
    var timer;
    return function(){
        console.log(timer);
        timer=1;
        setTimeout(()=>cb(timer),100);
    }
}

const deboun = debounce_test();
// deboun();
// deboun();


function debounce(callback,delay){
    var timer;
    return function(){
        var self = this;
        var args = arguments;
        clearTimeout(timer);
        timer = setTimeout(function(){
            callback.apply(self,args);
        },delay);
    }
}

//2.实现一个once函数
function once(callback){
    var flag=true;
    return function(){
        if(flag) {
            callback && callback();
            flag=false;
        }
    }
}

const once1 = once(()=>{console.log(1)});
once1();
once1();

//实现一个节流阀
function throttle(callback,delay){
    let last,timer;
    return function(){
        var self = this;
        var args = arguments;
        var now  = Date.now();  //+new Date()
        if(last && now<last+delay){
            last = now;
            clearTimeout(timer);
            timer = setTimeout(function(){
                callback.apply(self,args)
            },delay)
        }else{
            last = now;
            callback.apply(self,args);
        }
    }
}

// const throttle = (cb,delay) => {   //节流阀
//     let on = false;
//     return function(){
//         let context = this;
//         let args = arguments;
//         //console.log("args",args);
//         if(!on){
//             on = true;
//             setTimeout(() => {
//                 cb.call(context,args[0]);
//                 on = false;
//             },delay)
//         }
//     }
// };

//实现bind
Function.prototype.bind = function(context,...args){
    if (typeof this !== "function") {
        // closest thing possible to the ECMAScript 5 internal IsCallable function
        throw new TypeError("Function.prototype.bind - what is trying to be bound is not callable");
    }
    let fBind = this;
    let func = function(){};
    let bound = function(){
        return fBind.apply(
            this instanceof func && context?this:context || window,
            args.concat(Array.prototype.slice.call(arguments))
        );
    };
    func.prototype = this.prototype;
    bound.prototype = new func();
    return bound;
};

let str = ' a b c ';
console.log(str.replace(/^\s+|\s+$/,''));

function add(a){
    return a+'010';
}
//console.log(add(020));

let n=(2).toString();
console.log(typeof(n));

exports = "baidu";
window.exports = "baidu";


