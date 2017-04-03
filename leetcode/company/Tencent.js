/**
 * Created by heben on 2017/4/2.
 */


const integer_decomposition=function(n){
    let count=[];
    function recursion(m,k){
        count[m] = 0;
        if(m==k+1) return 1;
        for(let i=k;i<m;i++){
            count[m]+=recursion(m-i,i);
        }
        return count[m];
    }
    recursion(n,1);
    return count[n];
};
console.log(integer_decomposition(5));