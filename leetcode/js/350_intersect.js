var intersect = function(nums1,nums2){
    var length1 = nums1.length;
    var length2 = nums2.length;
    var k = 0;
	for(var i=0;i < length1;i++){
	  for(var j = k;j < length2;j++){
	     if(nums1[i] == nums2[j]){
	     	var temp = nums2[k];
	     	nums2[k] = nums2[j];
	     	nums2[j] = temp;
	     	k++;
	     	break;
	     }
	  }
	};
	var result = new Array();
	for(var i = 0;i<k;i++){
		result.push(nums2[i]);
	}
	return result;
}

var a = [1,3,4,2,3],b=[1,2,3,3];
var result = intersect(a,b);
console.log("result = "+result);