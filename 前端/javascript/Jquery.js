/**
 * Created by heben on 2017/3/30.
 */


function removeClass(el,className){
    if (el.classList)
        el.classList.remove(className);
    else
        el.className = el.className.replace(new RegExp('(^|\\b)' + className.split(' ').join('|') + '(\\b|$)', 'gi'), ' ');
    return el.className;
};

var el={className:"ab bc cd cde"};
console.log(removeClass(el,"ab cd"));
