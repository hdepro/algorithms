var reverseVowels = function(s) {
    var str = Array.from(s);
    var vowels = "aeiouAEIOU";
    var temp = [];
    str.forEach(char => {
         if(vowels.indexOf(char)!=-1){
            temp.push(char);
        }
    });

    var len = temp.length,t="";
    var temp2 = temp.map(function(char,index){
        return temp[len-index-1];
    });

    console.log("temp2 = "+temp2);
    var i = 0,result="";

    str.forEach(function(char,index){
        if(vowels.indexOf(char)!=-1){
            str[index] = temp2[i++];
        }
        result += str[index];
    });

    return result;
};

var result = reverseVowels("aA");
console.log("result = "+result);