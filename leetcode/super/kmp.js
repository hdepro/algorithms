/**
 * Created by heben on 2017/3/27.
 */

function getNext(str){
    let len=str.length,next=[0];
    for(let i=1;i<len;i++){
        next[i]=0;
        let j=i;
        while(true){
            j=next[j-1];
            if(str[j]==str[i]){
                next[i] = j+1;
                break;
            }
            if(j==0) break;
        }
    }
    return next;
}
console.log(getNext("abbabsasbbabbababbbb"));

function KMP(o,f){
    let next = getNext(f);
    let leno=o.length,lenf=f.length,start=0,common=0;
    while(start+lenf<=leno){
        let i=common;
        while(i<lenf){
            if(o[start+i] != f[i]){
                if(i==0){
                    start++;
                }else{
                    start += i-next[i-1];
                    common = next[i-1];
                }
                break;
            }
            if(++i == lenf) return start;
        }
    }
    return -1;
}

console.log(KMP("assssssssssdddddssff","sddddds"));
console.log(KMP("assssssssssdddddssff","sdddddds"));
console.log(KMP("abcdbsdbdnabcdbsdfcde","cdbsdf"));