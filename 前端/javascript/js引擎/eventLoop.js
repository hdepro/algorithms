/**
 * Created by heben on 2017/4/17.
 */

// 按照文档的说法，setImmediate() will execute code at the end of the current event loop cycle. This code will execute after
// any I/O operations in the current event loop and before any timers scheduled for the next event loop. 所以setInmmediate
// 应该在setTimeout之前执行。当然文档也说了在没有io的情况下，执行顺序是不确定的。

// 虽然JS运行在浏览器中，是单线程的，每个window一个JS线程，但浏览器不是单线程的，例如Webkit或是Gecko引擎，都可能有如下线程：
// javascript引擎线程
// 界面渲染线程
// 浏览器事件触发线程
// Http请求线程

// setImmediate(function(){
//     console.log(1);
// });
// setTimeout(function(){
//     console.log(2);
// },0);
// new Promise(function(resolve){
//     console.log(3);
//     resolve();
//     console.log(4);
// }).then(function(){
//     console.log(5);
// });
// console.log(6);
// process.nextTick(function(){
//     console.log(7);
// });
// console.log(8);

//加入两个nextTick的回调函数
process.nextTick(function () {
    console.log('nextTick延迟执行1');
});
process.nextTick(function () {
    console.log('nextTick延迟执行2');
});
// 加入两个setImmediate()的回调函数
setImmediate(function () {
    console.log('setImmediate延迟执行1');
    // 进入下次循环
    process.nextTick(function () {
        console.log('强势插入');
    });
});
setImmediate(function () {
    console.log('setImmediate延迟执行2');
});

console.log('正常执行');