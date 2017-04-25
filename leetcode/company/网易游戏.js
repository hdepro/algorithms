/**
 * Created by heben on 2017/4/15.
 */

function canVs(msg1,msg2){
    let country1 = msg1.split(' ')[1];
    let country2 = msg2.split(' ')[1];
    return msg1[0]!=msg2[0] && msg1[1]!=msg2[1] && country1!=country2;
}

function football(nums){
    let flag = [],n=nums.length,count=0,depth=0,result=[];
    const recursion=function(start){
        for(let i=start;i<n;i++){
            if(!flag[i]) {
                flag[i] = 1;
                for(let j=i+1;j<n;j++){
                    if(!flag[j] && canVs(nums[i],nums[j])){
                        //console.log(i,j);
                        flag[j] = 1;
                        depth++;
                        result.push([nums[i],nums[j]]);
                        recursion(i+1);
                        result.pop();
                        depth--;
                        flag[j] = 0;
                    }
                }
                flag[i] = 0;
            }
        }
        if(depth == n/2) {
            console.log(result);
            count++;
        }
    };
    recursion(0);
    return count;
}

console.log(football([
    "A1 GZ",
    "A2 HZ",
    "B2 HZ",
    "B1 GZ",
    "C1 GZ",
    "C2 HZ",
    "D1 GZ",
    "D2 HZ",
    "H2 HZ",
    "H1 GZ",
    "E1 GZ",
    "E2 HZ",
    "F1 GZ",
    "F2 HZ",
    "G1 GZ",
    "G2 HZ",
]));
