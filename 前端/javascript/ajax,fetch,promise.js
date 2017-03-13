/**
 * Created by heben on 2017/3/11.
 */
// escape()不能直接用于URL编码，它的真正作用是返回一个字符的Unicode编码值。
// 比如"春节"的返回结果是%u6625%u8282，，escape()不对"+"编码 主要用于汉字编码，现在已经不提倡使用。

// encodeURI()是Javascript中真正用来对URL编码的函数。 编码整个url地址，但对特殊含义的符号"; " +
// "/ ? : @ & = + $ , #"，也不进行编码。对应的解码函数是：decodeURI()。

// encodeURIComponent() 能编码"; / ? : @ & = + $ , #"这些特殊字符。
// 对应的解码函数是decodeURIComponent()。
// 假如要传递带&符号的网址，所以用encodeURIComponent();



// setTimeout(function () {
//     console.log('three');
// }, 0);
//
// Promise.resolve().then(function () {
//     console.log('two');
// });
//
// console.log('one');

// setTimeout(fn, 0)在下一轮“事件循环”开始时执行，Promise.resolve()在本轮“事件循环”结束时执行，
// console.log(’one‘)则是立即执行，因此最先输出

//加载图片
const preloadImage = function (path) {
    return new Promise(function (resolve, reject) {
        var image = new Image();
        image.onload  = resolve;
        image.onerror = reject;
        image.src = path;
    });
};

const applyMiddleware=function(...middleWares){
    return next=>reducer=>{
        console.log("next = "+next);
        console.log("reducer = "+reducer);
        console.log(middleWares);
    }
};

console.log(applyMiddleware(1,2,3)("next")("reducer"));

const arr = [1,2,3];
console.log(...arr);

















// function ajax(options){
//     if(window.XMLHttpRequest){
//         var xmlHttp = new XMLHttpRequest();
//     }else{
//         xmlHttp = new ActiveXObject("Microsoft.XMLHTTP");
//     }
//
//     options.method = (options.method || "GET").toUpperCase();
//     options.dataType = options.dataType || "json";
//     const params = formatParams(options.data);
//
//     if(options.dataType == "jsonp"){                  //跨域支持
//         const script = document.createElement("script");
//         script.src = options.url+"?jsonp=callback";
//         console.log(script.src);
//         document.body.appendChild(script);
//         window.callback = function(data){
//             console.log(data);
//         }
//     }else{
//         if(options.method == "GET"){
//             xmlHttp.open("GET",options.url+"?"+params,options.async);
//             xmlHttp.send();
//         }else if(options.method == "POST"){
//             xmlHttp.open("POST",options.url,options.async);
//             xmlHttp.setRequestHeader("Content-Type","application/x-www-form-urlencoded");
//             xmlHttp.send(params);
//         }
//
//         xmlHttp.onreadystatechange = function(){
//             console.log(xmlHttp.readyState);
//             if(xmlHttp.readyState == 4){
//                 if(xmlHttp.status == 200){
//                     options.success && options.success(xmlHttp.responseText,xmlHttp.responseXML);
//                 }else{
//                     options.fail && options.fail(xmlHttp.status);
//                 }
//             }
//         };
//     }
// };
//
// function formatParams(data){
//     var arr = [];
//     for(var p in data){
//         arr.push(encodeURIComponent(p)+"="+encodeURIComponent(data[p]));
//     }
//     return arr.join("&");
// };
//
// ajax({
//     method:"get",
//     url:"/ajax/demo_get2.asp?fname=Bill&lname=Gates",
//     async:true,
//     success:function(responseText,responseXML){
//         console.log("responseText = "+responseText,"responseXML = "+responseXML);
//     },
//     fail:function(status){
//         console.log("fail status = "+status);
//     }
// });
//
// ajax({
//     method:"get",
//     url:"http://localhost:9000/flowmall/api/test",
//     async:true,
//     dataType:"jsonp",
//     success:function(responseText,responseXML){
//         console.log("responseText = "+responseText,"responseXML = "+responseXML);
//     },
//     fail:function(status){
//         console.log("fail status = "+status);
//     }
// });
//
//
// ajax({
//     method:"post",
//     url:"/ajax/demo_post2.asp",
//     async:true,
//     success:function(responseText,responseXML){
//         console.log("responseText = "+responseText,"responseXML = "+responseXML);
//     },
//     fail:function(status){
//         console.log("fail status = "+status);
//     },
//     data:{
//         fname:"Bill",
//         lname:"Gates"
//     }
// });