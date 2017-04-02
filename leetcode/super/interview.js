/**
 * Created by heben on 2017/3/31.
 */

//1.给一个数组有正有负，求连续的素组元素相加的最大和为多少

function maxSum(nums){
    let n=nums.length,max=nums[0],postfix=nums[0],postfix_location=0,location=0,sum=[nums[0]];
    for(let i=1;i<n;i++){
        sum[i]=sum[i-1]+nums[i];
        postfix = Math.max(postfix+nums[i],nums[i]);
        if(postfix==nums[i]) postfix_location=i;
        max=Math.max(max,postfix,sum[i]-sum[location]+nums[location]);
        if(max==postfix) location=postfix_location;
    }
    return max;
}
console.log(maxSum([1,2,-6,3,-2,6,-3,7,4,-6,4,-2,5]));

//2.规定一个数组，这个数组里的每个元素是2,3,5中的一个或者几个的乘积，如（2 3 4 5 6 8 9 10。。。。），求第1万个元素是多少

function func(n){
    let L1=[1],L2=[1],L3=[1];
    let i=0,j=0,k=0,count=0;
    while(true){
        let min=Math.min(2*L1[i],3*L2[j],5*L3[k]);
        if(min == 2*L1[i]) i++;
        if(min == 3*L2[j]) j++;
        if(min == 5*L3[k]) k++;
        L1.push(min);
        L2.push(min);
        L3.push(min);
        count++;
        if(count==n) return min;
    }
}
console.log(func(10));