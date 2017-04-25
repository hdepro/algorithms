/**
 * Created by heben on 2017/4/24.
 */

function Promise(func){
    const state = {pending:'pending',resolve:'resolve',reject:'reject'};
    let currentState = state.pending;
    let self = this;
    let resolveList = [];
    let rejectList = [];
    this.then = function(resolveFunc,rejectFunc){
        switch(currentState){
            case state.resolve:
                setTimeout(resolveFunc,0);
                break;
            case state.reject:
                setTimeout(rejectFunc,0);
                break;
            case state.pending:
                resolveFunc && resolveList.push(resolveFunc);
                rejectFunc && rejectList.push(rejectFunc);
                break;
            default:
                break;
        }
        return this;
    };
    function resolve(){
        if(currentState !== state.pending){
            throw new Error("state is error");
        }
        currentState = state.resolve;
        setTimeout(() => {for(let list of resolveList){
            resolveList.shift()();
        }},0);
    };
    function reject(){
        if(currentState !== state.pending){
            throw new Error("state is error");
        }
        currentState = state.reject;
        setTimeout(() => {for(let list of resolveList){
            rejectList.shift()();
        }},0)
    };
    func(resolve,reject);
};

let promise = new Promise(function(resolve, reject) {
    console.log('Promise');
    resolve();
});

promise.then(function() {
    console.log('Resolved.');
});

console.log('Hi!');
