/**
 * Created by heben on 2017/3/25.
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
console.log(fg(2));