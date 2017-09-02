/**
 * Created by heben on 2017/3/15.
 */

/**
 * @param {number} numCourses
 * @param {number[][]} prerequisites
 * @return {boolean}
 */
"use strict";

var canFinish = function(numCourses, prerequisites) {
    let len=prerequisites.length,args=new Array(numCourses),temp=[],result=[],need=[],count=0;
    for(let i=0;i<len;i++){
        if(args[prerequisites[i][0]] === undefined) args[prerequisites[i][0]] = new Array(numCourses);
        args[prerequisites[i][0]][prerequisites[i][1]] = 1;
        if(temp[prerequisites[i][0]] === undefined){
            temp[prerequisites[i][0]]=1;
        }else{
            temp[prerequisites[i][0]]++;
        }
    }
    for(let i=0;i<numCourses;i++){
        if(temp[i] === undefined) result.push(i);
        else need.push(i);
    }
    let target=0,compare=0;
    while(result.length){
        target = result.pop();
        count++;
        for(let i=0;i<need.length;i++){
            compare = need[i];
            if(args[compare][target] > 0){
                temp[compare]--;
                if(temp[compare] === 0){
                    result.push(compare);
                    need[i] = need[need.length-1];
                    i--;
                    need.pop();
                }
            }
        }
    }
    return count==numCourses;
};

console.log(canFinish(3,[[1,0]]));
console.log(canFinish(2,[[1,0],[0,1]]));