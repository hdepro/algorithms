/**
 * Created by heben on 2017/3/30.
 */

function* fibonacci(){
    let [prev,next]=[0,1];
    for(;;){
        [prev,next] = [next,prev+next];
        yield next;
    }
}

for(let n of fibonacci()){
    if(n>100) break;
    console.log(n);
}