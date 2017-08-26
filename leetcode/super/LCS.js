/**
 * Created by heben on 2017/8/23.
 */

//最长公共子串
const longestCommonSubstring = function(str1,str2){
    let len1 = str1.length;
    let len2 = str2.length;
    let dp = [],maxCommon = 0;
    const compare = function(s1,s2){
       let l1 = s1.length;
       let l2 = s2.length;
       let l = Math.min(l1,l2);
       let common = 0;
       for(let i=0;i<l;i++){
           if(s1[i] === s2[i]){
               common++;
           }else{
               break;
           }
       }
       return common;
    };
    for(let i=0;i<len1;i++){
        dp[i] = [];
        for(let j=0;j<len2;j++){
            if(dp[i][j] === undefined){
                dp[i][j] = compare(str1.slice(i),str2.slice(j));
            }else{
                dp[i][j] = str1[i] === str2[j]?dp[i-1][j-1]-1:compare(str1.slice(i),str2.slice(j));
            }
            maxCommon = Math.max(dp[i][j],maxCommon);
        }
    }
    return maxCommon;
};
console.log(longestCommonSubstring("aancsasnjdndddaajsss","bhndncsasjkdkdk"));
console.log(longestCommonSubstring("a","b"));

const longestCommonSubstring2 = function(str1,str2){
    let len1 = str1.length;
    let len2 = str2.length;
    let maxCommon = 0;
    for(let i=0;i<len1;i++){
        let s1 = str1.slice(i);
        let s2 = str2.slice(0);
        let l1 = s1.length;
        let l2 = s2.length;
        let l = Math.min(l1,l2);
        let common = 0;
        for(let j=0;j<l;j++){
            if(s1[j] === s2[j]){
                common++;
            }else{
                maxCommon = Math.max(common,maxCommon);
                common = 0;
            }
        }
    }
    for(let i=0;i<len2;i++){
        let s1 = str1.slice(0);
        let s2 = str2.slice(i);
        let l1 = s1.length;
        let l2 = s2.length;
        let l = Math.min(l1,l2);
        let common = 0;
        for(let j=0;j<l;j++){
            if(s1[j] === s2[j]){
                common++;
            }else{
                maxCommon = Math.max(common,maxCommon);
                common = 0;
            }
        }
    }
    return maxCommon;
};
console.log(longestCommonSubstring2("aancsasnjdndddaajsss","bhndncsasjkdkdk"));
console.log(longestCommonSubstring2("a","b"));

//最长公共子序列
const longestCommonSequence = function(arr1,arr2){
    let len1 = arr1.length;
    let len2 = arr2.length;
    let flag=[],dp=[],result = [],k=0;
    for(let i=0;i<len1;i++){
        for(let j=0;j<len2;j++){
            if(arr1[i] === arr2[j] && !flag[j]){
                dp[k++] = [i,j];
                flag[j] = 1;
                break;
            }
        }
    }
    console.log(dp);
    let tmp = [];
    if(dp.length) result = tmp[0] = [arr1[dp[0][0]]];
    for(let i=1,len=dp.length;i<len;i++){
        tmp[i] = [];
        for(let j=i-1;j>=0;j--){
            if(dp[j][0] < dp[i][0] && dp[j][1] < dp[i][1]){
                tmp[i] = tmp[i].concat(tmp[j]);
                break;
            }
        }
        tmp[i].push(arr1[dp[i][0]]);
        if(tmp[i].length > result.length){
            result = tmp[i];
        }
    }
    return result;
};
console.log(longestCommonSequence([1,5,6,4,7,3,2,6,7,5,3,2],[2,3,2,6,5,7,4,3,5,8,2]));