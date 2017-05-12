/**
 * Created by heben on 2017/4/24.
 */

function noop(){}

let LAST_ERROR = null;
let IS_ERROR = {};

function getThen(obj) {
    try {
        return obj.then;
    } catch (ex) {
        LAST_ERROR = ex;
        return IS_ERROR;
    }
}

function tryCallOne(fn, a) {
    try {
        return fn(a);
    } catch (ex) {
        LAST_ERROR = ex;
        return IS_ERROR;
    }
}
function tryCallTwo(fn, a, b) {
    try {
        fn(a, b);
    } catch (ex) {
        LAST_ERROR = ex;
        return IS_ERROR;
    }
}


function Promise(func){
    this._state = 0;
    this._deferredState = 0;
    this._value = null;
    this._deferreds = null;
    func((args) => {
       resolve(this,args);
    },(args) => {
        reject(this,args);
    });
}

function resolve(self,newValue){
   if(newValue && (typeof newValue === "function" || typeof newValue === "object")){
       let then = getThen(newValue);
       if(then === IS_ERROR){
           reject(self,LAST_ERROR);
           return ;
       }
       if(then === self.then && newValue instanceof Promise){
           self._value = newValue;
           self._state = 3;
           final(self);
           return ;
       }
       if(typeof then === "function"){
           then((args)=>{
               resolve(self,args);
           },(args) => {
               reject(self,args);
           });
           return ;
       }
   }
   self._state = 1;
   self._value = newValue;
   final(self);
}

function reject(self,newValue){
    self._state = 2;
    self._value = newValue;
    final(self);
}

function final(self){
    if(self._deferredState === 1){
        handle(self,self._deferreds);
        self._deferreds = null;
    }
    if(self._deferredState === 2){
        for(let deferred of self._deferreds){
            handle(self,deferred);
        }
        self._deferreds = null;
    }
}

function handle(self,deferred){
    while(self._state === 3){
        self = self._value;
    }
    if(self._state === 0){
        if(self._deferredState === 0){
            self._deferreds = deferred;
            self._deferredState = 1;
            return ;
        }
        if(self._deferredState === 1){
            self._deferreds = [self._deferreds,deferred];
            self._deferredState = 2;
            return ;
        }
        self._deferreds.push(deferred);
        return ;
    }
    handleResolve(self,deferred);
}

function handleResolve(self,deferred){
    process.nextTick(function(){
            let cb = self._state === 1?deferred.onFulfilled:deferred.onRejected;
            if(cb == null){
                if(self._state === 1){
                    resolve(deferred.promise,self._value);
                }else{
                    reject(deferred.promise,self._value);
                }
                return ;
            }
            let ret = tryCallOne(cb,self._value);
            if(ret === IS_ERROR){
                reject(deferred.promise,LAST_ERROR);
            }else{
                resolve(deferred.promise,ret);
            }
        }
    )
}

Promise.prototype.then = function(onFulfilled,onRejected){
    let promise = new Promise(noop);
    handle(this,new Handler(onFulfilled,onRejected,promise));
    return promise;
};

function Handler(onFulfilled,onRejected,promise){
    this.onFulfilled = onFulfilled;
    this.onRejected = onRejected;
    this.promise = promise;
}

Promise.prototype.catch = function(rejectFunc){
    return this.then(null,rejectFunc);
};

Promise.resolve = function(obj){
    return new Promise(resolve => resolve(obj));
};

Promise.reject = function(obj){
    return new Promise(reject => reject(obj));
};

Promise.all = function(promiseArr){
    let count = 0,args = [],n = promiseArr.length;
    return new Promise(function(resolve,reject){
        for(let promise of promiseArr){
            promise.then((res) => {
                count ++;
                args.push(res);
                if(count === n){
                    resolve(args);
                }
            },(res) => {
                reject(res);
            });
        }
    });
};

Promise.race = function(promiseArr){
    return new Promise(function(resolve,reject){
        for(let promise of promiseArr){
            promise.then(resolve,reject);
        }
    })
};

module.exports = Promise;



// module.exports = function Promise(func){
//     const state = {pending:'pending',resolve:'resolve',reject:'reject'};
//     let currentState = state.pending;
//     let self = this,data;
//     let resolveList = [];
//     let rejectList = [];
//     this.then = function(resolveFunc,rejectFunc){
//         switch(currentState){
//             case state.resolve:
//                 setTimeout(function(){
//                     data = resolveFunc(data)
//                 },0);
//                 break;
//             case state.reject:
//                 setTimeout(function(){
//                     data = rejectFunc(data)
//                 },0);
//                 break;
//             case state.pending:
//                 resolveFunc && resolveList.push(resolveFunc);
//                 rejectFunc && rejectList.push(rejectFunc);
//                 break;
//             default:
//                 break;
//         }
//         return this;
//     };
//     this.catch = function(rejectFunc){
//         switch(currentState){
//             case state.reject:
//                 setTimeout(function(){
//                     data = rejectFunc(data)
//                 },0);
//                 break;
//             case state.pending:
//                 rejectFunc && rejectList.push(rejectFunc);
//                 break;
//             default:
//                 break;
//         }
//         return this;
//     };
//     function resolve(args){
//         if(currentState !== state.pending){
//             throw new Error("state is error");
//         }
//         currentState = state.resolve;
//         setTimeout(() => {
//             for(let list of resolveList){
//                 data = list(args);
//                 args = data;
//             }},0);
//     }
//     function reject(args){
//         if(currentState !== state.pending){
//             throw new Error("state is error");
//         }
//         currentState = state.reject;
//         setTimeout(() => {
//             for(let list of rejectList){
//                 data = list(args);
//                 args = data;
//             }},0)
//     }
//     func(resolve,reject);
// };
