/**
 * Created by heben on 2017/4/7.
 */


var line;
while(line=read_line()){
    var arr=line.split(' ');
    var n=+arr[0];
    var m=+arr[1];
    var sum=0;
    for(var i=0;i<m;i++){
        sum+=n;
        n=Math.sqrt(n);
    }
    print(sum.toFixed(2));
}

// function maxSequence(n,arr){
//     var left=-1,right=-1,flag=1,lTemp=0;
//     for(var i=1;i<n;i++){
//         if(flag){
//             if(arr[i]<arr[i-1]){
//                 flag=0;
//                 if(i-lTemp>Math.max(1,right-left)){
//                     left=lTemp;
//                     right=i;
//                 }
//             }
//         }else{
//             if(arr[i]>arr[i-1]){
//                 if(i-1-lTemp>Math.max(1,right-left)){
//                     left = lTemp;
//                     right = i-1;
//                 }
//                 lTemp=i-1;
//                 flag=1;
//             }else{
//                 if(i-lTemp>Math.max(1,right-left)){
//                     left=lTemp;
//                     right=i;
//                 }
//             }
//         }
//     }
//     return [left,right];
// }
//
// console.log(maxSequence(2,[1,2]));
// console.log(maxSequence(2,[3,2]));
// console.log(maxSequence(3,[1,2,1]));
// console.log(maxSequence(9,[1,3,2,1,4,2,6,8,7]));
// console.log(maxSequence(10,[1,3,1,2,5,4,3,1,9,10]));






function g(arrs){
    var arr = arrs.map(function(a){return a.toUpperCase()});
    var n=arr.length;
    var i=0,j=n-1;

    function swap(arr,i,j){
        var temp=arr[i];
        arr[i]=arr[j];
        arr[j]=temp;
    }

    while(i<j){
        if(arr[i]==arr[i+1]){
            swap(arr,i+1,j--);
        }else{
            i++;
        }
    }
    return arr.slice(0,j+1);
}


function f(n,m,arrn1,arrm){
    var result=[],res=0,count=0,max=0;
    for(var i=0;i<n;i++){
        var arrn = arrn1.map(function(arrns){
            return g(arrns.sort(function(a,b){
                return a- b;
            }))
        })
    }
    for(var k=0;k<m;k++){
        var arrms = g(arrm[k].sort(function(a,b){return a- b;}));
        var mslen = arrms.length;
        result.push(arrn[0]);
        max=0;
        for(var s=0;s<n;s++){
            var arrns=arrn[s];
            var nslen = arrns.length;
            var i=0,j=0;
            while(i<mslen&&j<nslen){
                if(arrms[i]>arrns[j]){
                    j++;
                }else if(arrms[i]<arrns[j]){
                    i++;
                }else{
                    i++;j++;count++;
                }
            }
            if(count>max){
                result.push(arrns);
            }
            count=0;
        }
    }
}