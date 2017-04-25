/**
 * Created by heben on 2017/4/15.
 */

function draw(amount,n){
    const arr = Array(amount).fill().map((_,i)=>i+1);
    for(let i=amount-1;i>amount-n-1;i--){
        let rand = Math.floor((i+1)*Math.random());
        [arr[rand],arr[i]] = [arr[i],arr[rand]];
    }
    return arr.slice(-n);
}

console.log(draw(62,10));

function *drawG(amount){
    const arr = Array(amount).fill().map((_,i)=>i+1);
    for(let i=amount-1;i>=0;i--){
        let rand = Math.floor((i+1)*Math.random());
        [arr[rand],arr[i]] = [arr[i],arr[rand]];
        yield arr[i];
    }
}
let drawer = drawG(62);
let result = Array(10).fill().map(x => drawer.next().value);
console.log(result);

console.log(Array(10));
console.log(Array(10).fill());