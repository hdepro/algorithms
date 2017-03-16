/**
 * Created by heben on 2017/3/15.
 */

/**
 * @param {number} numCourses
 * @param {number[][]} prerequisites
 * @return {boolean}
 */

var canFinish = function(numCourses, prerequisites) {
    let len=prerequisites.length,args=new Array(numCourses),temp=[],result=[],count=0;
    for(let i=0;i<len;i++){
        if(args[prerequisites[i][0]] === undefined) args[prerequisites[i][0]] = new Array(numCourses);
        args[prerequisites[i][0]][prerequisites[i][1]] = 1;
        if(temp[prerequisites[i][0]] === undefined){
            temp[prerequisites[i][0]]=1;
        }else{
            temp[prerequisites[i][0]]++;
        }
    }
    let i=0,j=0;
    while(i<numCourses){
        let target = result.shift();
        if(target === undefined){
            j=0;
            while(j<numCourses){
                if(!temp[j]) {
                    result.push(j);
                    temp[j]=-1;
                    count++;
                }
                j++;
            }
            if(result.length == 0){
                return count == numCourses;
            }
        }else{
            j=0;
            while(j<numCourses){
                if(args[j]) {
                    if(args[j][target] > 0){
                        temp[j]--;
                    }
                }
                j++;
            }
        }
    }
};

console.log(canFinish(3,[[1,0]]));
console.log(canFinish(2,[[1,0],[0,1]]));