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

var longestPalindrome2 = function(s) {
    let len=s.length;
    let dp=[],start=0,end=0,max=0;
    for(let i=0;i<len;i++){
        dp[i] = [];
        dp[i][i] = 1;
        if(i < len-1){
            if(s[i] == s[i+1]){
                dp[i][i+1] = 2;
            }else{
                dp[i][i+1] = 0;
            }
        }
    }
    for(let i=2;i<len;i++){
        for(let j=0;j<len;j++){
            let v = i+j;
            if(s[j] == s[v]){
                dp[j][v] = dp[j+1][v-1] + 2;
            }else{
                dp[j][v] = 0;
            }
            if(dp[j][v]>max){
                max = dp[j][v];
                start = j;
                end = v;
            }
        }
    }
    return max;
};
console.log(longestPalindrome2("babadggcddcggg"));
