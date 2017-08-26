/**
 * Created by heben on 2017/8/22.
 */
const swap = function(arr,i,j){
    let tmp = arr[i];
    arr[i] = arr[j];
    arr[j] = tmp;
};

function quickSort(nums){
    const onceSort = function(arr,start,end){
        if(end<=start) return;
        let i=start,j=end;
        while(i<j){
            if(arr[i]>arr[i+1]){
                swap(arr,i,i+1);
                i++;
            }else{
                swap(arr,i+1,j);
                j--;
            }
        }
        onceSort(arr,start,i-1);
        onceSort(arr,i+1,end);
    };
    onceSort(nums,0,nums.length-1);
    return nums;
}
console.log(quickSort([1,3,5,6,5,4,7,2,5,8,9,4,5,3]));

const createHeap = function(nums){
    let len = nums.length;
    let compare_index = 0;
    for(let i=parseInt(len/2-1);i>=0;i--){
        if(nums[2*i+2] && nums[2*i+2]<nums[2*i+1]){
            compare_index = 2*i+2;
        }else{
            compare_index = 2*i+1;
        }
        if(nums[i] > nums[compare_index]){
            swap(nums,i,compare_index);
            adjustHeap(nums,compare_index,len);
        }
    }
};
const adjustHeap = function(nums,startIndex,endIndex){
    let i=startIndex,compare_index = 0;
    while(2*i+1 < endIndex){
        if(2*i+2 !== endIndex && nums[2*i+2]<nums[2*i+1]){
            compare_index = 2*i+2;
        }else{
            compare_index = 2*i+1;
        }
        if(nums[i] <= nums[compare_index]){
            break;
        }
        swap(nums,i,compare_index);
        i = compare_index;
    }
};
const heapSort = function(nums){
    let len = nums.length;
    createHeap(nums);
    for(let i=1;i<len;i++){
        swap(0,len-i);
        adjustHeap(nums,0,len-i);
    }
    return nums;
};
console.log(heapSort([1,3,5,6,5,4,7,2,5,8,9,4,5,3]));