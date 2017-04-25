/**
 * Created by heben on 2017/3/25.
 */


// var line;
// while(line=read_line()){
//     var arr=line.split(' ');
//     var n=+arr[0];
//     var m=+arr[1];
//     var sum=0;
//     for(var i=0;i<m;i++){
//         sum+=n;
//         n=Math.sqrt(n);
//     }
//     print(sum.toFixed(2));
// }

function maxIncome(n,m,arr){
    var max = 0,res=0;
    arr.sort(function(a,b){
        return a-b;
    });
    console.log(arr);
    var start = Math.max(m-n,0);
    for(var i=start;i<m;i++){
        var value = arr[i]*(m-i);
        if(value>max){
            max = value;
            res = arr[i];
        }
    }
    return res;
}
console.log(maxIncome(5,4,[2,8,10,7]));
console.log(maxIncome(5,6,[5,8,10,7,6,9]));
console.log(maxIncome(9,7,[2,4,6,4,9,7,7]));
console.log(maxIncome(9,7,[1,1,1,1,1,1,8]));
console.log(maxIncome(7,4,[9,8,7,5]));
console.log(maxIncome(2,5,[1,6,1,1,13]));
console.log(parseInt(1000000));



// function maxStack(n,k){
//     var m = parseInt(n/k);
//     var mod = n%k;
//     var i=0;
//     while(true){
//         if(mod+i*k>=parseInt((m-i)/2)) break;
//         i++;
//     }
//     return m-i;
// }
// console.log(maxStack(5,1));
// console.log(maxStack(4,2));
// console.log(maxStack(2,1));
// console.log(maxStack(5,2));
// console.log(maxStack(1000000000,1));


function sum(){
    var args = Array.prototype.slice.call(arguments,0);
    var n=arguments.length,bit=0,sum=0;
    for(var i=0;i<n;i++){
        if(typeof args[i] == 'string' || typeof args[i] == 'number'){
            var num = parseFloat(args[i]).toString();
            if(num == "NaN") continue;
            var bit = Math.max(bit,num.length-2);
            sum += parseFloat(num);
        }
    }
    return sum.toFixed(bit);
}

// Should equal 15
console.log(sum(1, 2, 3, 4, 5));
// Should equal 0
console.log(sum(5, null, -5));
// Should equal 10
console.log(sum('1.0', false, 1, true, 1, 'A', 1, 'B', 1, 'C', 1, 'D', 1,
    'E', 1, 'F', 1, 'G', 1));
// Should equal 0.3, not 0.30000000000000004
console.log(sum(0.1, 0.2));