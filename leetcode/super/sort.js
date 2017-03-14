/**
 * Created by heben on 2017/3/13.
 */

/**
 * @param {number[]} nums
 * @return {number[]}
 */

"use strict";

const insertSort = function(nums){
    let len = nums.length,j=0,tmp=0;
    for(let i=1;i<len;i++){
        if(nums[i-1]<=nums[i]) continue;
        tmp = nums[i];
        nums[i] = nums[i-1];
        j=i-1;
        while(j>0){
            if(nums[j-1]<=tmp) break;
            nums[j] = nums[j-1];
            j--;
        }
        nums[j] = tmp;
    }
    return nums;
};

console.log("insertSort [] = " + insertSort([]));
console.log("insertSort = " + insertSort([2,3,5,6,8,1,4,5,6,9,7,4,8,10,11,12,13,14,15,3,7]));



const heapAdjust = function(nums){
    let len = nums.length,j=0,tmp=0;
    for(let i=parseInt(len/2);i>0;i--){
        j = i;
        while((j*2)<=len){
            tmp = (j*2!=len && nums[j*2-1]>nums[j*2])?j*2:j*2-1;
            if(nums[j-1] <= nums[tmp]) break;
            swap(j-1,tmp);
            j=tmp+1;
        }
    }

    function swap(i,j){
        let tmp = 0;
        tmp = nums[i];
        nums[i] = nums[j];
        nums[j] = tmp;
    }
    return nums;
};
console.log("heapAdjust = " + heapAdjust([2,3,5,6,8,1,4,5,6,9,7,4,8,10,11,12,13,14,15,3,7]));


const heapSort = function(nums){
    heapAdjust(nums);
    let len=nums.length,j=0,tmp=0,k=0;
    for(let i=0;i<len;i++){
        swap(0,len-1-i);
        j=0;
        while((j*2+1)<len-1-i){
            k = j*2+1 != len-i-2 && nums[j*2+1]>nums[j*2+2]?j*2+2:j*2+1;
            if(nums[j] <= nums[k]) break;
            swap(j,k);
            j=k;
        }
    }

    function swap(i,j){
        tmp = nums[i];
        nums[i] = nums[j];
        nums[j] = tmp;
    }
    return nums;
};

console.log("heapSort = " + heapSort([2,3,5,6,8,1,4,5,6,9,7,4,8,10,11,12,13,14,15,3,7]));


const bubbleSort = function(nums){
    let len=nums.length,pos=0,flag=len-1,tmp=0;
    for(let i=0;i<len;i++){
        pos=flag;
        flag=0;
        for(let j=0;j<pos;j++){
            if(nums[j] > nums[j+1]){
                tmp = nums[j];
                nums[j] =nums[j+1];
                nums[j+1]=tmp;
                flag=j;
            }
        }
        if(!flag) break;
    }
    return nums;
};

console.log("bubbleSort = " + bubbleSort([2,3,5,6,8,1,4,5,6,9,7,4,8,10,11,12,13,14,15,3,7]));


const quickSort=function(nums){
    let len=nums.length,tmp=0;
    const quick_sort = function(i,j){
        if(i>=j) return ;
        let value = nums[j],head=i,tail=j;
        while(i<j){
            if(nums[i] > value){
                swap(i,--j);
            }else{
                i++;
            }
        }
        swap(i,tail);
        quick_sort(head,i-1);
        quick_sort(i+1,tail);
        return ;
    };

    function swap(i,j){
        tmp = nums[i];
        nums[i] = nums[j];
        nums[j] = tmp;
    }
    quick_sort(0,len-1);
    return nums;
};

console.log("quickSort = " + quickSort([2,3,5,6,8,1,4,5,6,9,7,4,8,10,11,12,13,14,15,3,7]));

// const mergeSort = function(nums){
//     let length= nums.length;
//     for(let i = 1;i<=length;i = i*2){
//         let temp = [],left = 0,right = i;
//         for (let j = 0;j<length;j++){
//             let section = Math.floor(j/(2*i))*i*2;
//             if(left<section+i && (nums[left] < nums[right] || right>=Math.min(length,section+2*i))){
//                 temp[j] = nums[left++];
//             }else{
//                 temp[j] = nums[right++];
//             }
//             if(left==section+i && right==Math.min(length,section+2*i)){
//                 right = right + i;
//                 left = left+i;
//             }
//         }
//         nums = temp;
//     }
//     return nums;
// };

const mergeSort=function(nums){
    let len=nums.length,tmp=[];
    const merge = function(start,end){
        if(start >= end) return;
        let middle = parseInt((start+end)/2);
        merge(start,middle);
        merge(middle+1,end);
        let i=start,j=middle+1,k=start;
        tmp = nums.slice(0);
        while(1){
            if(i>middle) break;
            console.log(tmp);
            if(j>end) {
                nums.splice(k,middle-i+1,...tmp.slice(i,middle+1));
                break;
            }
            if(tmp[i] <= tmp[j]){
                nums[k++] = tmp[i++];
            }else{
                nums[k++] = tmp[j++];
            }
        }
        return ;
    };
    merge(0,len-1);
    return nums;
};

console.log("mergeSort = " + mergeSort([2,4,3,5]));
//console.log("mergeSort = " + mergeSort([2,3,5,6,8,1,4,5,6,9,7,4,8,10,11,12,13,14,15,3,7]));