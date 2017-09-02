// var topKFrequent = function(nums, k) {
//     var length = nums.length;
//     var hash = Object.create(Object.prototype);
//     var hash_array = new Array();
//     var j = 0,value = undefined;
//     for(var i = 0;i<length;i++){
//     	var key = nums[i]+"key";
//     	if(hash[key] == undefined){
//     		hash[key] = j;
//     		hash_array[j] = 1;
//     		j++;
//     	}else{
//     		value = hash[key];
//     		hash_array[value]++ ;
//     	}
//     }

//     console.log("hash_array = "+hash_array);
//     console.log("hash = "+JSON.stringify(hash));

//     var hash_length = hash_array.length;
//     var temp = new Array(k);
//     j=0;
//     while(j<k){
//     	temp[j] = j;
// 	   for(var i = 0;i<hash_length-1-j;i++){
//     	   if(hash_array[i]>hash_array[i+1]){
//     	   	  var change = hash_array[i+1];
//     	   	  hash_array[i+1] = hash_array[i];
//     	   	  hash_array[i] = change;
//     	   }else{
//     	   	console.log("j = "+j);
//     	   	console.log("i = "+i);
//     	   	  temp[j] = i+1;
//     	   }
//        }
//        j++;
//        hash_array.pop();
//     }
    

//     console.log("temp = "+temp);

//     var result = new Array();
//     for(var i= 0;i<k;i++){
//     	for(p in hash){
//     		if(temp[i] == hash[p]){
//     			result.push(parseInt(p));
//     			delete hash[p];
//     			break;
//     		}
//     	}
//     }

//     return result;
    
// };

var topKFrequent = function(nums, k) {
    var length = nums.length;
    var hash = Object.create(Object.prototype);
    var hash_array = new Array();
    for(var i = 0;i<length;i++){
    	var key = nums[i]+"key";
    	if(hash[key] == undefined){
    		hash[key] = 1;
    		hash_array.push(key);
    	}else{
    		hash[key]++;
    	}
    }

    console.log("hash_array = "+hash_array);
    console.log("hash = "+JSON.stringify(hash));

    var hash_length = hash_array.length;
    var temp = new Array(k);
    var j=0;
    while(j<k){
    	temp[j] = j;
    	var i;
	   for(i = 0;i<hash_length-1-j;i++){
    	   if(hash[hash_array[i]]>hash[hash_array[i+1]]){
    	   	  var change = hash_array[i+1];
    	   	  hash_array[i+1] = hash_array[i];
    	   	  hash_array[i] = change;
    	   }
       }
       temp[j] = parseInt(hash_array[i]);
       j++;
       hash_array.pop();
    }
    

    console.log("temp = "+temp);


    return temp;
    
};

//var result = topKFrequent([5,3,1,1,1,3,73,1],2);
var result = topKFrequent([1,1,1,2,2,3],2);
console.log("result = "+result);