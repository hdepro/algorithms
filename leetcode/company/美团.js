/**
 * Created by heben on 2017/9/9.
 */

console.log(typeof NaN);   //number
console.log(typeof null);

console.log("Number null = ",Number(null));   //0
console.log("Number undefined = ",Number(undefined));  //NaN
console.log("empty string = ",Number(""));  //NaN
console.log("1a string = ",Number("1a"));  //NaN

console.log("parseInt null = ",parseInt(null));     //NaN
console.log("parseInt undefined = ",parseInt(undefined));  //NaN
console.log("1a parseInt = ",parseInt("1a"));  //NaN

console.log("parseInt 08 = ",parseInt("08",7));
console.log("parseInt 8 = ",parseInt("8",7));
console.log("parseInt 09 = ",parseInt("09"));

console.log("parseInt 0.0000001 = ",parseInt(0.0000001));
console.log("parseInt 0.000001 = ",parseInt(0.000001));
console.log("0.0000001 = ",0.0000001);

console.log("null + 0 = ",null+0);             //0
console.log("undefined + 0 = ",undefined+0);   //NaN

console.log("null == undefined = ",null == undefined);
console.log("null == 0 = ",null == 0);
console.log("undefined == 0 = ",undefined == 0);
console.log("null === null = ",null === null);

console.log("String null = ",String(null));     //NaN
console.log("String undefined = ",String(undefined));  //NaN

//console.log("null.toString = ",null.toString());  //NaN
//console.log("undefined.toString = ",undefined.toString());  //NaN
if([]){
    console.log("[] is true");
}
if([] == false){
    console.log("[] == false is true");
}

a="2";
function foo(){
    console.log("arguments.callee = ",arguments.callee);
    console.log("arguments.caller = ",arguments.caller);
    console.log("this.a = ",this.a);
}
foo();


//实现express的next
class Queue{
    constructor(){
        this.taskList = [];
        this.index = 0;
    }
    add(task){
        this.taskList.push(task);
    }
    next(){
        let task = this.taskList[this.index++];
        task(next);
    }
}



function task(next){
    //start
    next();
    //end
}

let timer = setTimeout(() => {console.log("111111")},1000);
clearTimeout(timer);