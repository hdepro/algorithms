/**
 * Created by heben on 2017/4/2.
 */

function expect(P,Q,N){
    let dp=[[]];
    for(let i=0;i<101;i++){
        dp[0][i] = 0;
    }
    for(let i=1;i<N+1;i++){
        dp[i] = [];
        dp[i][100] = 1+dp[i-1][Math.floor(P/Math.pow(2,N-i+1))];
        for(let j=99;j>=0;--j){
            dp[i][j] = j/100.0*dp[i-1][Math.floor(P/Math.pow(2,N-i+1))]+(100-j)/100.0*dp[i][j+Q>=100?100:j+Q]+1;
        }
    }
    return dp[N][P];
}

console.log(expect(50,75,2));
console.log(expect(45,75,2));
console.log(expect(50,75,100000));

function expect1(P,Q,N){
    let result=0;
    function recursion(p,q,quest){
        if(p>=100) return quest;
        let get_item = p*quest/100.0;
        let not_get_item = (100-p)/100.0*recursion(p+q,q,quest+1);
        return get_item+not_get_item;
    }
    let p=P;
    for(let i=1;i<=N;i++){
        if(i>7) {
            result+=(N-i+1)*recursion(0,Q,1);
            break;
        }
        else result += recursion(p,Q,1);
        p=Math.floor(p/2);
    }
    return result;
}
console.log(expect1(50,75,2));
console.log(expect1(45,75,2));
console.log(expect1(50,75,100000));