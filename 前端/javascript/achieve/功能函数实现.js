/**
 * Created by heben on 2017/9/30.
 */

// let arr1=[2,{a:1}];
// let arr2=[...arr1];
// arr1[0]=3;
// arr1[1].a=2;
// console.log(arr2);

function deepCopy(obj){
    // if(Array.isArray(obj)){
    //     return [...obj];
    // }
    let res;
    if(Array.isArray(obj)) {
        res = [];
    }else{
        res = {};
    }
    for(let prop in obj){
        if(typeof obj[prop] === "object" && obj[prop] !== null){
            res[prop] = deepCopy(obj[prop]);
        }else{
            res[prop] = obj[prop];
        }
    }
    return res;
}

let obj1 = {a:1,b:null,c:undefined,d:[1,2,4,{a:1,b:undefined}],eee:{a:{a1:[2,"test"]}},g:function(){}};
console.log(obj1);
console.log(deepCopy(obj1));


function compareArray(arr1,arr2){
    let len1 = arr1.length;
    let len2 = arr2.length;
    if(len1 != len2) {return false;}
    for(let i=0;i<len1;i++){
        if(JSON.stringify(arr1[i]) !== JSON.stringify(arr2[i])){
            return false;
        }
    }
    return true;
}


console.log(JSON.stringify([1,2,null,undefined,NaN,{a:1,b:2,c:[NaN,null,{a:1}]}]));
console.log(compareArray([1,2,null,undefined,NaN,{a:1,b:2,c:[NaN,null,{a:1}]}],[1,2,null,undefined,NaN,{a:1,b:2,c:[NaN,null,{a:1}]}]));
console.log(compareArray([1,2,NaN,{a:1,b:2,c:[NaN,null,{a:1}]}],[1,2,NaN,{a:1,b:2,c:[NaN,null,{a:0}]}]));

let arr = [1,2,3];
let obj = arr.reduce((a,b,curIndex)=> {a[curIndex] = b;return a;},{});
console.log(obj);


function trim(str){
    return str.replace(/^\s*|\s*$/g,"");
}

console.log("s"+trim("")+"s");
console.log("s"+trim("   ")+"s");
console.log("s"+trim(" a b c  ")+"s");
console.log("s"+trim(" a b c")+"s");
console.log("s"+trim("a b c ")+"s");
console.log("s"+trim("a b c")+"s");


function trim2(str){
    return str.match(/^\s*(?:[\s\S]*?)\s*$/);
}

console.log(trim2(""));
console.log(trim2("    "));
console.log(trim2("  a b c  "));
console.log(trim2("  a b c"));
console.log(trim2("a b c  "));
console.log(trim2("a b c"));

