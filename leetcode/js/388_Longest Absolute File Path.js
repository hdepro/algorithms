
/**
 * @param {string} input
 * @return {number}
 */
 var lengthLongestPath = function(input) {
   var depth_length = [],max_length = 0,tmp_length = 0,current_depth = 0,current_length = 0;
   var dir_file = input.split("\n");
    var length = dir_file.length; 
    depth_length[0] = 0;
    function countTableKey(str){
    	var len = str.split("\t").length;
    	return len;
    }
   for(var i = 0;i < length;i++){
   	current_depth = countTableKey(dir_file[i]);
   	current_length = dir_file[i].length - current_depth+1;
   	depth_length[current_depth] = depth_length[current_depth - 1] + current_length;
   	tmp_length = depth_length[current_depth] + current_depth - 1;
   	if(dir_file[i].indexOf(".") >= 0 && tmp_length > max_length){
   		max_length = tmp_length;
   	}
   }
   return max_length;
};


var result = lengthLongestPath("dir\n\tsubdir1\n\t\tfile1.ext\n\t\tsubsubdir1\n\tsubdir2\n\t\tsubsubdir2\n\t\t\tfile2.ext");
console.log("result = "+result);