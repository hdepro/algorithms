/**
 * Created by heben on 2017/5/21.
 */

//使用with，可能会产生意外的全局变量，性能严重下降，严格模式下无法使用
let obj={a:1,b:2};
with(obj){
    a=2;
    c=3;
    console.log(a);
}
console.log(c);

//使用eval，可读性非常差，存在作用域的问题，不容易调试，安全性问题可能存在xss攻击
e = 3;
function testEval(){
    let e = 4;
    eval("e = 5");
    console.log(e);
}
testEval();
console.log(e);

e2 = 3;
function testEval2(){
    let e2 = 4;
    let eva = eval;
    eva("e2 = 5");
    console.log(e2);
}
testEval2();
console.log(e2);

var arr = [];
for(var i=0;i<5;i++){
    arr.push(function(){
        return i*i;
    });
}
console.log(arr[0](),arr[4]());

var arr1 = [];
for(let i=0;i<5;i++){
    arr1.push(function(){
        return i*i;
    });
}
console.log(arr1[0](),arr1[4]());

var arr2 = [];
for(var i=0;i<5;i++){
    arr2.push(()=>{
        return i*i;
    });
}
console.log(arr2[0](),arr2[4]());

// async function async_test1(){
//     console.log(new Date(),1);
//     await new Promise((resolve,reject)=>{
//         setTimeout(resolve,1000);
//     });
//     await console.log(new Date(),2);
//     console.log(new Date(),3);
// }
// async_test1();

// function *async_test2(){
//     console.log(new Date());
//     yield setTimeout(() => console.log(1),1000);
//     yield console.log(new Date(),s);
// }
// async_test2().next();

let sleep = [];

for (var i = 0; i < 5; i++) {
    ((j) => {
        sleep.push(new Promise(function (resolve, reject) {

            setTimeout(function () {
                console.log(new Date, j);
                resolve();
            }, j * 1000)
        }))
    })(i)
}
// await只能使用在原生语法
(async () => {
    for (let item of sleep) {
        await item
    }
    console.log(new Date(), i,"end");
})();