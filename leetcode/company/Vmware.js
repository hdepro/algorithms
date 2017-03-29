/**
 * Created by heben on 2017/3/29.
 */

// var line;
// while(line=read_line()){
//     var arr = line.split(" ");
//     print();
// }

function fg(num){
    var temp=num,result=0;
    while(true){
        var y=(Math.log2(1+4*temp))/Math.log2(5);
        console.log(y);
        var down = Math.floor(y);
        var up = Math.ceil(y);
        var res1 = parseInt(0.25*(Math.pow(5,down)-1));
        var res2 = parseInt(temp/res1);
        if(res2%5==0) return -1;
        temp = temp - res1*res2;
        result += res2*Math.pow(5,down);
        if(temp == 0) return result;
    }
}
//console.log(fg(2));

//args[[1,2],[2,3]];
//console.log([1,2,3].includes(3));

function maxProfit(args,n){
    let max=0,stack0=[],stack1=[],record=[],count0=0,count1=0;
    args.sort((a,b)=>a[0]-b[0]);
    for(let i=0;i<n-1;i++){
        stack0.push(args[i][0]);
        stack1.push(args[i][1]);
        record[i]=1;
        while(stack0.length){
            let pop0 = stack0.pop();
            for(let j=0;j<n-1;j++){
                if(record[j]) continue;
                if(args[j][0] == pop0){
                    stack0.push(args[j][1]);
                    record[j]=1;
                    count0++;
                }else if(args[j][1] == pop0) {
                    stack0.push(args[j][0]);
                    record[j]=1;
                    count0++;
                }
            }
        }
        while(stack1.length){
            let pop1 = stack1.pop();
            for(let j=0;j<n-1;j++) {
                if (record[j]) continue;
                if (args[j][0] == pop1) {
                    stack1.push(args[j][1]);
                    record[j] = 1;
                    count1++;
                } else if (args[j][1] == pop1) {
                    stack1.push(args[j][0]);
                    record[j] = 1;
                    count1++;
                }
            }
        }
        max=Math.max(count0*count1,max);
        record=[];count0=0;count1=0;
    }
    return max;
}

console.log(maxProfit([[1,2],[2,3],[3,4]],4));
console.log(maxProfit([[1,2],[2,3],[2,4],[4,5],[4,6]],6));


