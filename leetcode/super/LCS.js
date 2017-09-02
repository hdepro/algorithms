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
            dp[i][j] = compare(str1.slice(i),str2.slice(j));
            maxCommon = Math.max(dp[i][j],maxCommon);
        }
    }
    return maxCommon;
};
console.log(longestCommonSubstring("aancsasnjdndddaajsss","bhndncsasjkdkdk"));
console.log(longestCommonSubstring("a","b"));
console.log(longestCommonSubstring("acb","bc"));

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
    arr1.unshift("0");
    arr2.unshift("0");
    let len1 = arr1.length;
    let len2 = arr2.length;
    let dp=[],result = [],maxSequence = 0,end1=0,end2=0;
    dp[0] = new Array(len2).fill(0);
    for(let i=1;i<len1;i++){
        if(!dp[i]) dp[i] = [];
        dp[i][0] = 0;
        for(let j=1;j<len2;j++){
            if(arr1[i] === arr2[j]){
                dp[i][j] = dp[i-1][j-1]+1;
            }else{
                dp[i][j] = Math.max(dp[i-1][j],dp[i][j-1]);
            }
            if(dp[i][j] > maxSequence){
                end1 = i;
                end2 = j;
            }
        }
    }
    let i=end1,j=end2;
    //console.log(dp);
    while(i>=1 && j>=1){
        if(arr1[i] === arr2[j]){
            result.unshift(arr1[i]);
            i--;
            j--;
        }else if(dp[i][j-1] === dp[i][j]){
            j--;
        }else if(dp[i-1][j] === dp[i][j]){
            i--;
        }
    }
    return result;
};
console.log(longestCommonSequence([1,5,6,4,7,3,2,6,7,5,3,2],[2,3,2,6,5,7,4,3,5,8,2]));
console.log(longestCommonSequence([1],[2,3,2,1,1,6,5,7,4,3,5,8,2]));