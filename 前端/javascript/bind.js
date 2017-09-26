/**
 * Created by heben on 2017/9/24.
 */

function Point(x, y) {
    this.x = x;
    this.y = y;
}

Point.prototype.toString = function() {
    return this.x + ',' + this.y;
};

var p = new Point(1, 2);
p.toString(); // '1,2'


var emptyObj = {};
var xAxisPoint = Point.bind(emptyObj, 0);
var axisPointX = new xAxisPoint(4);

var YAxisPoint = Point.bind(null, 0);
var axisPoint = new YAxisPoint(5);
axisPoint.toString(); // '0,5'

console.log(axisPoint instanceof Point); // true
console.log(axisPoint instanceof YAxisPoint); // true
console.log(new Point(17, 42) instanceof YAxisPoint); // true


console.log(new Point(17, 42) instanceof xAxisPoint); // true
console.log(axisPointX instanceof xAxisPoint); // true
console.log(axisPointX instanceof Point); // true

Function.prototype.bind = function(context){

};