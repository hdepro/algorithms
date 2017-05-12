/**
 * Created by heben on 2017/5/4.
 */

let Promise = require("./Promise");

// let promise1 = new Promise(function(resolve, reject) {
//     console.log('promise1 start');
//     resolve();
// }).then(function(data){
//     console.log("promise1 1 then",data);
//     return 111;
// });
//
// promise1.then(function(data) {
//     console.log('promise1 2 then',data);
// });

// let promise1 = new Promise(function(resolve, reject) {
//     console.log('promise1 start');
//     resolve(new Promise(function(resolve, reject) {
//         console.log('promise11 start');
//         setTimeout(resolve,0);
//     }));
// }).then(function(data){
//     console.log("promise1 1 then",data);
//     return 333;
// });
//
// promise1.then(function(data) {
//     console.log('promise1 2 then',data);
// });

/*
let promise2 = new Promise(function(resolve, reject) {
    console.log('promise2 start');
    setTimeout(resolve,0);
}).then(function(data){
    console.log("promise2 1 then",data);
    return 222;
});

promise2.then(function(data) {
    console.log('promise2 2 then',data);
    return 333333333333333333;
});

promise2.then(function(data) {
    console.log('promise222222 2 then',data);
});

console.log('Hi!');

Promise.resolve(3).then(function(data){
    console.log("promise 1 then",data);
    return 333;
});

Promise.reject(4).then(function(data){
    console.log("promise resolve 4 then",data);
    return "resolve";
},function(data){
    console.log("promise reject 4 then",data);
    return "reject";
}).then(function(data){
    console.log("promise reject 4 data",data);
});


new Promise(function(resolve, reject) {
    console.log('promise4 start');
    setTimeout(resolve,0);
}).then(function(data){
    console.log("promise4 1 then",data);
    return new Promise(function(resolve, reject) {
        console.log('promise5 start');
        setTimeout(resolve,0);
    });
}).then(function(data){
    console.log("promise5 end",data);
});*/


new Promise((resolve,reject)=>{
    reject(1);
}).then(null,null).then(null,data => {
    console.log(data);
});

new Promise((resolve,reject)=>{
    setTimeout(() => resolve(2),0);
}).then(data => {
    console.log(data);
});



new Promise((resolve,reject)=>{
    resolve({then:function(resolve1){console.log(3);resolve1(4);}});
}).then(data => {
    console.log(data);
}).then(data => {
    console.log(data);
});

new Promise((resolve,reject)=>{
    resolve();
}).then(data => {
    console.log(data);
});