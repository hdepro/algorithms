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
    //console.log(n);
}


//generator-----------------------------------------------------------thunk
let fs = require("fs");

function thunk(dirname){
    return callback => {
        fs.readdir(dirname,callback);
    }
}


let dirname = __dirname;

function *gen(){
    let files1 = yield thunk(dirname);
    console.log("1 end",files1);
    let files2 = yield thunk(dirname);
    console.log("2 end",files2);
    let files3 = yield thunk(dirname);
    console.log("3 end",files3);
    return 1;
}

/*let g = gen();
let gn = g.next();
while(!gn.done){
    gn = g.next();
}*/

function run(gen){
    let g = gen();
    function next(err,files){
        if(err) console.log(err);
        let gn = g.next(files);
        if(gn.done) return;
        gn.value(next);
    }
    next();
}

//run(gen);




//async---------------------------------------await
function timeout(cb,ms) {
    return new Promise((resolve) => {
        setTimeout(() => {cb();resolve();}, ms);
    });
}
async function asy(){
    let files1 = await timeout(() => {console.log("1")},100);
    console.log("1 end",files1);
    let files2 = await timeout(() => {console.log("2")},100);
    console.log("2 end",files2);
    let files3 = await timeout(() => {console.log("3")},100);
    console.log("3 end",files3);
    return 1;
}
asy();



//generator-----------------------------------------------------------thunk
{
    function gen_promise(value) {
        return cb => {
            new Promise((resolve, reject) => {
                setTimeout(resolve, 1000);
            }).then(onFulfilled => {
                //console.log(onFulfilled);
                cb(value);
            })
        }
    }

    function *gen() {
        let a = yield gen_promise("a");
        console.log(a);
        let b = yield gen_promise("b");
        console.log(b);
        let c = yield gen_promise("c");
        console.log(c);
        return 111;
    }

    function runGen(gen) {
        let ge = gen();
        //let gnnnnn = ge.next();
        function next(data) {
            let gnnnnn = ge.next(data);
            if (gnnnnn.done) {
                return
            };
            gnnnnn.value(next);
        }

        next();
    }

    runGen(gen);


// let ge = gen();
// let gn = ge.next();
// while(!gn.done){
//     console.log(gn.done);
//     gn = ge.next();
// }

}

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
