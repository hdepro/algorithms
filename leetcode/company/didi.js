
/**
 * Created by heben on 2017/8/26.
 */

// process.stdin.resume();
// process.stdin.setEncoding('ascii');
//
// var input = "";
// var input_array = "";
//
// process.stdin.on('data', function (data) {
//     input += data;
// });
//
// process.stdin.on('end', function () {
//     input_array = input.split("\n");
//     var nLine = 0;
//
//     while(nLine < input_array.length){
//         var line = input_array[nLine++].trim();
//         if(line === ''){
//             continue;
//         }
//         var input_arrays = line.split(' ');
//         var len = input_arrays.length,sum = new Array(len);
//         sum[0] = input_arrays[0];
//         var maxSum = sum[0];
//         for(var i=1;i<len;i++){
//             sum[i] = sum[i-1]+input_arrays[i];
//         }
//         var j=0,i=0;
//         while(j<len){
//             var tmpSum = sum[j] - sum[i] + input_arrays[i];
//             if(tmpSum < 0){
//                 i = ++j;
//             }else if(tmpSum > maxSum){
//                 maxSum = tmpSum;
//                 j++;
//             }else{
//                 j++;
//             }
//         }
//         console.log(maxSum);
//     }
// });
//
// function maxArrSum(arr){
//     var input_arrays = arr;
//     if(input_arrays.length === 0) {
//         console.log(0);
//         return;
//     }
//     var len = input_arrays.length,sum = new Array(len);
//     sum[0] = input_arrays[0];
//     var maxSum = sum[0];
//     for(var i=1;i<len;i++){
//         sum[i] = sum[i-1]+input_arrays[i];
//     }
//     var j=0,i=0;
//     while(j<len){
//         var tmpSum = sum[j] - sum[i] + input_arrays[i];
//         if(tmpSum < 0){
//             i = ++j;
//         }else{
//             j++;
//         }
//         if(tmpSum > maxSum){
//             maxSum = tmpSum;
//         }
//     }
//     console.log(maxSum);
// }
// maxArrSum([-23,17,-7,11,-2,1,-34]);
// maxArrSum([]);
// maxArrSum([1]);
// maxArrSum([1,-1]);
// maxArrSum([-2,-1,-2,-1]);

function kthNum(input_arrays,k){
    var res = input_arrays[0];
    function quick_sort(arr,kk){
        var i=0,j=arr.length-1;
        while(i < j){
            if(arr[i] > arr[i+1]){
                swap(arr,i,i+1);
                i++;
            }else{
                swap(arr,i+1,j);
                j--;
            }
        }
        if(kk === arr.length - i){
            res = arr[i];
            return ;
        }else if(kk < arr.length - i){
            quick_sort(arr.slice(i+1),kk);
        }else{
            quick_sort(arr.slice(0,i),i + kk - arr.length);
        }
    }
    function swap(nums,i,j){
        var tmp = nums[i];
        nums[i] = nums[j];
        nums[j] = tmp;
    }
    quick_sort(input_arrays,k);
    console.log(res);
}

kthNum([1,2,3,4,5,2,5,7,8,6],2);

