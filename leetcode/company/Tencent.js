/**
 * Created by heben on 2017/4/2.
 */


// const integer_decomposition=function(n){
//     let count=[];
//     function recursion(m,k){
//         count[m] = 0;
//         if(m==k+1) return 1;
//         for(let i=k;i<m;i++){
//             count[m]+=recursion(m-i,i);
//         }
//         return count[m];
//     }
//     recursion(n,1);
//     return count[n];
// };
// console.log(integer_decomposition(5));

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
    while(--i){
        if(compare > arr[0] && compare < arr[len-1]){
            return compare;
        }
        if(arr.includes(compare)){
            return compare;
        }
        if(compare < arr[0]){
            compare += Math.pow(2,i);
        }
        if(compare > arr[len-1]){
            compare -= Math.pow(2,i);
        }
    }
}
console.log(tree(4,[1,2,3]));
console.log(tree(4,[12,15,13]));