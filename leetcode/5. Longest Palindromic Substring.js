/**
 * Created by heben on 2017/3/18.
 */

/**
 * @param {string} s
 * @return {string}
 */

var longestPalindrome = function(s) {
    let len=s.length;
    let k=0,i=0,j=0,tempi=0,tempj=0,start=0,end=0,max=1;
    while(k<len){
        i=k,j=k+1;
        tempi=k,tempj=k;
        while(i>=0&&j<len){
            if(s[i]!=s[j]) break;
            if((j-i)%2){
                tempi=i--;
            }else{
                tempj=j++;
            }
        }
        if(tempj-tempi+1>max){
            max=tempj-tempi+1;
            start=tempi;
            end=tempj;
        }
        k++;
    }
    return s.slice(start,end+1);
};

console.log(longestPalindrome(""));
console.log(longestPalindrome("babad"));