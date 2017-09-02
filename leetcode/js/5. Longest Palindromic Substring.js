/**
 * Created by heben on 2017/3/18.
 */

/**
 * @param {string} s
 * @return {string}
 */

var longestPalindrome = function(s) {
    let len=s.length;
    let k=0,i=0,j=0,start=0,end=0;
    while(k<len){
        i=k,j=k+1;
        while(i>=0&&j<len){
            if(s[i]!=s[j]) break;
            i--;
            j++;
        }
        if(j-i-2>end-start){
            start=i+1;
            end=j-1;
        }
        i=k-1,j=k+1;
        while(i>=0&&j<len){
            if(s[i]!=s[j]) break;
            i--;
            j++;
        }
        if(j-i-2>end-start){
            start=i+1;
            end=j-1;
        }
        k++;
    }
    return s.slice(start,end+1);
};

console.log(longestPalindrome(""));
console.log(longestPalindrome("babad"));