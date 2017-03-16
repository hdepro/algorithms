/**
 * Created by heben on 2017/3/10.
 */

//在插入大量新的html时候，使用innerHTML或outerHTML效率会高很多，因为在设置innerHTML时，
//就会创建一个html解析器，这个解析器是在浏览器级别的代码（C++编写）基础上运行的，因此比执行js快得多。

//cssText方式是为元素应用多项变化最快的方式，可以一次行应用所有变化

//offsetHeight表示元素在垂直方向上占用空间的大小，以像素计，包括滚动条和边框
//clientHeight表示元素在垂直方向上内边距以及元素内容占用空间大小，以像素计，不包括滚动条和边框

function stopBubble(e){
    var event = e||window.event;
    event.stopPropagation?event.stopPropagation():event.cancelBubble=true;
    event.preventDefault();
}