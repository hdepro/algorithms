/**
 * Created by heben on 2017/3/30.
 */

let regExp1 = /(^a)([\w]*)bb$/;
console.log(regExp1.exec("aaaabb"));

let reg1 = /\s*(\S*)\s*/;
console.log("  abc  ".match(reg1));
console.log("s"+"  abc  ".match(reg1)[1]+"s");