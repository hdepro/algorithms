/**
 * Created by heben on 2017/3/22.
 */

// const arr=["red","green","blue"];
// for(let i of arr){
//     console.log(i);
// }
// for(let i in arr){
//     console.log(i);
// }



{
    function gen_promise(value) {
        return new Promise((resolve, reject) => {
            setTimeout(() => resolve(value), 1000);
        })
    }

    function *gen() {
        let a = yield gen_promise("aaa");
        console.log(a);
        let b = yield gen_promise("bbb");
        console.log(b);
        let c = yield gen_promise("ccc");
        console.log(c);
        return 111;
    }
    let ge = gen();
    let gn = ge.next();

    function gn_recurision(){
        if(gn.done) {return};
        gn.value.then(onFulfilled => {
            gn = ge.next(onFulfilled);
            gn_recurision();
        })
    }
    gn_recurision();

    // for(let gg of ge){
    //     console.log(gg);
    // }
}
