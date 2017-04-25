/**
 * Created by heben on 2017/3/10.
 */

//在插入大量新的html时候，使用innerHTML或outerHTML效率会高很多，因为在设置innerHTML时，
//就会创建一个html解析器，这个解析器是在浏览器级别的代码（C++编写）基础上运行的，因此比执行js快得多。

//cssText方式是为元素应用多项变化最快的方式，可以一次行应用所有变化

//offsetHeight表示元素在垂直方向上占用空间的大小，以像素计，包括滚动条和边框(可以看到的高度)
//clientHeight表示元素在垂直方向上内边距以及元素内容占用空间大小，以像素计，不包括滚动条和边框(可以看到的高度)
//scrollHeight表示元素的实际高度，一般等于clientHeight,出现滚动条的时候会大于clientHeight(元素的高度)
//window.innerHeight表示浏览器显示文档区域在屏幕中占有的高度，浏览器窗口resize或者console查看元素都会使得其改变
//window.screen.availHeight表示显示屏幕的高度,是不会变的

function stopBubble(e){
    var event = e||window.event;
    event.stopPropagation?event.stopPropagation():event.cancelBubble=true;
    event.preventDefault();
}

// 相对于 DOM 对象，原生的 JavaScript 对象处理起来更快，
// 而且更简单。DOM 树上的结构、属性信息我们都可以很容易地用 JavaScript 对象表示出来