/**
 * Created by heben on 2017/4/2.
 */

//一个整数分解成若干个整数
const integer_decomposition=function(n){
    let count=[];
    function recursion(m,k){
        count[m] = 0;
        if(m==0) return 1;
        for(let i=k;i<=m;i++){
            count[m]+=recursion(m-i,i);
        }
        return count[m];
    }
    recursion(n,1);
    return count[n];
};
console.log(integer_decomposition(5));
console.log(integer_decomposition(6));
console.log(integer_decomposition(7));
console.log(integer_decomposition(8));


const integer_decomposition2=function(n){
    let dp=[],result=0;
    for(let i=1;i<=n;i++){
        dp[i]=[];
        for(let j=n;j>0;j--){
            if(j>i) dp[i][j]=0;
            else if(j==i) dp[i][j]=1;
            else if(j<i) dp[i][j] = dp[i][j+1] + dp[i-j][j];
        }
    }
    for(let i=1;i<=n;i++){
        result+=dp[n][i];
    }
    return dp[n][1];
};
console.log(integer_decomposition2(5));
console.log(integer_decomposition2(6));
console.log(integer_decomposition2(7));
console.log(integer_decomposition2(8));

//一个整数分解成若干个连续整数之和
const integer_decomposition3=function(n){
    let result = [],count=0;
    for(let k=2;k<=n/2+1;k++){  //k位分解的个数
        let temp=2*n/k-k+1;
        if(temp<=0) break;
        if(temp%2 == 0){
            i=temp/2;
            result[count]=[];
            for(let j=i;j<=i+k-1;j++){
                result[count].push(j);
            }
            count++;
        }
    }
    return result;
};
console.log(integer_decomposition3(15));
console.log(integer_decomposition3(16));
console.log(integer_decomposition3(17));
console.log(integer_decomposition3(18));


function getIndex(num){
    let i=0;
    while(true){
        if(num % 2==0) i++;
        else break;
        num = parseInt(num/2);
    }
    return i;
}

function tree(K,arr){
    arr.sort((a,b)=>a-b);
    let i=K-1,len=arr.length;
    let compare = Math.pow(2,i);
    i=i-1;
    while(true){
        if(compare >= arr[0] && compare <= arr[len-1]){
            return compare;
        }
        if(compare < arr[0]){
            compare += Math.pow(2,i);
        }
        if(compare > arr[len-1]){
            compare -= Math.pow(2,i);
        }
        i--;
    }
}
console.log(tree(4,[1,2,3]));
console.log(tree(4,[12,15,13]));