/**
 * Created by heben on 2017/3/22.
 */

const obj1={
    name:"heben",
    age:24
};

// Object.defineProperties(obj1, {
//     name: {
//         get: function () {
//             console.log("obj1 name get");
//         }
//     }
// });

Object.defineProperty(obj1,"name",{
    get: function (target,key) {
        console.log(`obj1 key get = ${key}`);
    }
});
console.log(obj1.name);


const obj2=new Proxy({},{
    get:function(target,key,receive){
        console.log(`obj2 key get = ${key}`);
        console.log(`obj2 target get = ${JSON.stringify(target)}`);
        return 1;
    },
    set:function(){
        console.log("set");
    }
});

console.log(obj2.a);
console.log(obj2.b);



const handler={
    get:function(target,name){
        if(name=="prototype"){
            return Object.prototype;
        }
        return "hello "+name;
    },
    apply:function(target,thisBinding,args){
        return args[0];
    },
    construct:function(target,args){
        return {value:args[1]};
    }
};

const func = new Proxy(function(x,y){return x+y},handler);
console.log("func = "+func(1,2));
console.log("func = "+JSON.stringify(new func(1,2)));
console.log(func.prototype === Object.prototype);
console.log(func.test);


