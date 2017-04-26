/**
 * Created by heben on 2017/4/26.
 */

console.log('["1", "2", "3"].map(parseInt)',["1", "2", "3"].map(parseInt));

console.log(null instanceof Object);  //false
console.log(1 instanceof Object);     //false

// var END = Math.pow(2, 53);
// var START = END - 100;
// var count = 0;
// console.log(START,END);
// for (var i = START; i <= END; i++) {
//     count++;
// }
// console.log(count);

//it actually prints 'Something' the + operator has higher precedence than the ternary one.
var val = 'smtg';
console.log('Value is ' + (val === 'smtg') ? 'Something' : 'Nothing');

//Array.prototype.filter is not invoked for the missing elements.
var ary = [0,1,2];
ary[10] = 10;
console.log(ary.filter(function(x) { return x === undefined;}));

var two   = 0.2;
var one   = 0.1;
var eight = 0.8;
var six   = 0.6;
console.log([two - one == one, eight - six == two]);

//Infinity % 2 gives NaN, -9 % 2 gives -1 (modulo operator keeps sign so it's result is only reliable compared to 0)
function isOdd(num) {
    return num % 2 == 1;
}
function isEven(num) {
    return num % 2 == 0;
}
function isSane(num) {
    return isEven(num) || isOdd(num);
}
var values = [7, 4, '13', -9, Infinity];
console.log(values.map(isSane));

console.log([parseInt(3, 8),parseInt(3, 2),parseInt(3, 0)]);

console.log(Array.isArray( Array.prototype ));


var a = [0];
if ([0]) {
    console.log(a == true);
} else {
    console.log("wut");
}

console.log([]==[]);