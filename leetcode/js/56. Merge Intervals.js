/**
 * Created by heben on 2017/3/6.
 */

/**
 * Definition for an interval.
 * function Interval(start, end) {
 *     this.start = start;
 *     this.end = end;
 * }
 */

/**
 * @param {Interval[]} intervals
 * @return {Interval[]}
 */

"use strict";

function Interval(start, end) {
    this.start = start;
    this.end = end;
}

const merge = function(intervals) {
    intervals.sort((obj1,obj2)=>obj1.start-obj2.start);
    let len = intervals.length;
    if(!len) return [];
    let result=[intervals[0]];
    for(let i=1;i<len;i++){
        if(intervals[i].start>result[result.length-1].end){
            result.push(intervals[i]);
        }else{
            result[result.length-1].end = Math.max(result[result.length-1].end,intervals[i].end);
        }
    }
    return result;
};

const intervals=[
    new Interval(1,3),
    new Interval(2,6),
    new Interval(8,10),
    new Interval(15,18),
    new Interval(0,2)
];

const a= new Interval(1,3);
console.log(a.start);
console.log(merge(intervals));
