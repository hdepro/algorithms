/**
 * Created by heben on 2017/3/8.
 */

console.log("1/0 = "+1/0);
console.log("0/0 = "+0/0);

console.log("Number --------------------------------");  //number接受的是object
console.log("Number null = "+Number(null));  //0
console.log("Number undefined = "+Number(undefined));
console.log("Number  = "+Number(""));
console.log("Number 0xf = "+Number(0xf));
console.log("Number 123a = "+Number("123a"));
console.log("Number 0123 = "+Number("0123"));
console.log("Number 0.123 = "+Number("0.123"));
console.log("Number a = "+Number("a"));


console.log("parseInt --------------------------------");     //parseInt接受的是string
console.log("parseInt null = "+parseInt(null));   //NaN
console.log("parseInt undefined = "+parseInt(undefined));
console.log("parseInt  = "+parseInt(""));
console.log("parseInt 0xf = "+parseInt(0xf));
console.log("parseInt 0xf 字符串= "+parseInt("0xf"));
console.log("parseInt 123a = "+parseInt("123a"));
console.log("parseInt 0123 = "+parseInt("0123"));
console.log("parseInt 0.123 = "+parseInt("0.123"));
console.log("parseInt a = "+parseInt("a"));
console.log("parseFloat 0xf = "+parseFloat(0xf));
console.log("parseFloat 0xf 字符串 = "+parseFloat("0xf"));
//parseFloat只解析十进制字符串

const num = 10;  //null和undefined没有toString方法
console.log("10 toString(2) = "+num.toString(2));
console.log("String null = "+String(null));
console.log("String undefined = "+String(undefined));

//任何数与NaN比较结果都是false
console.log("num >= NaN = "+(num>=NaN));
console.log("num < NaN = "+(num<NaN));
console.log("NaN == NaN = "+(NaN==NaN));
console.log("null == undefined = "+(null == undefined));
console.log("null == 0 = "+(null == 0));
console.log("undefined == 0 = "+(undefined == 0));

console.log(1+"2"+"2");
console.log(1+ +"2"+"2");
console.log(1+-"1"+"2");
console.log(+"1"+"2"+"2");
console.log("A"-"B"+"2");
console.log("A"-"B"+2);

console.log(0&&2||1);

console.log("isNaN ",isNaN(NaN));