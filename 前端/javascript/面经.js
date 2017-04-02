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



