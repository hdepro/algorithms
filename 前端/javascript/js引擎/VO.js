/**
 * Created by heben on 2017/3/24.
 */
var x = 1;  //定义一个全局变量 x
function A(y){
    var x = 2;  //定义一个局部变量 x
    function B(z){ //定义一个内部函数 B
        console.log(x+y+z);
    }
    return B; //返回函数B的引用
}
var C = A(1); //执行A,返回B
C(1); //执行函数B

//一.全局初始化
const globalObject={   //全局对象
    Math:{},
    Date:{},
    String:{},
    document:{},
    Window:this
};

var ECStack=[];             //执行环境栈;
var ECG={};         //全局执行环境;
ECStack.push(ECG);
ECStack.pop();

ECStack=[
    ECG={           //全局执行环境
        VOG:{       //全局变量对象
            ...,    //全局对象原有属性
            x:1,
            A:function(){},
            scope:this     //内部属性指向VOG
        }
    }
];


//二.执行函数A

// ECStack=[
//     ECA={
//         scope:VOG,
//         AOA:{      //函数A的活动对象
//             y:1,
//             x:2,
//             B:function(){},
//             //B[[scope]]:this,
//             arguments:[],
//             this:window
//         },
//         scopeChain:<AOA,VOG>    //作用域链
//     },
//     ECG={           //全局执行环境
//         VOG:{       //全局变量对象
//             ...,    //全局对象原有属性
//             x:1,
//             A:function(){},
//             //A[[scope]]:this     //内部属性指向VOG
//         }
//     }
// ];


//三.执行函数B
// ECStack=[
//     ECB={
//         scope:AOA,
//         AOB:{      //函数B的活动对象
//             z:1,
//             B:function(){},
//             //B[[scope]]:this,
//             arguments:[],
//             this:window
//         },
//         scopeChain:<AOB,AOA,VOG>    //作用域链
//     },
//     ECG={           //全局执行环境
//         VOG:{       //全局变量对象
//             ...,    //全局对象原有属性
//             x:1,
//             A:function(){},
//             //A[[scope]]:this     //内部属性指向VOG
//         }
//     }
// ];

//变量的解析过程，从作用域链的顶端开始找


console.log(x); //function
var x = 10;
x = 20;
function x() {}
console.log(x);    //20


function test(a, b) {
    var c = 20;
    console.log(a);//结果是什么？为什么？
    function a(){}
    var e = function _e(){};
    (function x(){});
}
test(30);   //function