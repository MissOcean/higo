/* utils */

//fomate Date
export function fomateDate(date, format) {
    if (typeof date === 'number') {
        date = new Date(date);
    } else if (Object.prototype.toString.call(date) != "[object Date]") {
        return 'arg error'
    }
    format = format || 'yyyy-MMMM-dd h:m:s';
    let dateObj = {
        "M+": date.getMonth() + 1,
        "d+": date.getDate(),
        "h+": date.getHours(),
        "m+": date.getMinutes(),
        "s+": date.getSeconds(),
        "q+": Math.floor((date.getMonth() + 3) / 3),
        "S+": date.getMilliseconds()
    };
    if (/(y+)/i.test(format)) {
        format = format.replace(RegExp.$1, (date.getFullYear() + '').substr(4 - RegExp.$1.length));
    }
    for (var k in dateObj) {
        if (new RegExp("(" + k + ")").test(format)) {
            format = format.replace(RegExp.$1, RegExp.$1.length == 1
                ? dateObj[k] : ("00" + dateObj[k]).substr(("" + dateObj[k]).length));
        }
    }
    return format;
}

//上拉加载
export function upLoadMore(callback) {
    let timer;
    let html = document.documentElement
    let f = (event) => {
        if (timer) clearTimeout(timer);
        timer = setTimeout(() => {
            let scrollTop = html.scrollTop;//向上卷去的高度
            let winHeight = html.clientHeight;//可视区域的高度
            let contentHeight = html.scrollHeight;//内容区域的总高度
            if (winHeight + scrollTop + 10 >= contentHeight) {
                callback();
            }
        }, 200);
    }
    document.addEventListener('scroll', f);
    return function () {
        document.removeEventListener('scroll', f);

    }
}

//回到顶部
export function goBackToTop(callback, duration = 400) {
    let html = document.documentElement;
    let inteval = 20,
        distance = html.scrollTop * inteval / duration;

    let timer = setInterval(() => {
        html.scrollTop -= distance
        if (html.scrollTop <= 0) {
            clearInterval(timer);
            typeof callback == 'function' && callback()
        }
    }, inteval)
    return timer;
}

import $ from 'jquery/dist/jquery';

export function horizontalMove(options) {
    //初始化数据
    let speed = 0.5;
    let startX;//触摸时的X坐标
    let x = 0;//X轴滑动的距离
    let aboveX = 0; // 设一个全局变量记录上一次内部块滑动的位置
    // console.log(options);
    options = options || {};
    speed = options.speed;
    let {innerEle, wrapEle} = options;
    if (innerEle && wrapEle) {
        let documentWidth = $(innerEle).width();//内部滑动模块的宽度
        let wrapperWidth = $(wrapEle).width(); //外部框架的宽度

        function touchStart(e) {//触摸开始
            aboveX = parseInt($(innerEle).css("left"));
            // e.preventDefault();//防止点击无效
            let touch = e.touches[0];
            startX = touch.pageX;   //刚触摸时的坐标
            // startX=e.clientX;
        }

        function touchMove(e) {//滑动
            e.preventDefault();
            let touch = e.touches[0];
            x = touch.pageX - startX;//滑动的距离
            $(innerEle).css({left: aboveX + x * speed});
        }

        function touchEnd(e) {//手指离开屏幕
            // aboveX = parseInt($(innerEle).css("left"));//touch结束后记录内部滑块滑动的位置 在全局变量中体现 一定要用parseInt()将其转化为整数字;
            if (x > 0 && aboveX > 0) {//当滑动到最顶端时候不能再网上滑动
                //inner.style.top=0;
                $(innerEle).animate({left: 0}, 200);
                aboveX = 0;
            }
            if (x < 0 && (aboveX < (-(documentWidth - wrapperWidth)))) {//当滑动到最底部时候不能再往下滑动
                // inner.style.top=-(documentHeight-wrapperWidth)+"px";

                $(innerEle).animate({left: -(documentWidth - wrapperWidth)}, 200);
                aboveX = -(documentWidth - wrapperWidth);
            }
        }

        wrapEle.addEventListener('touchstart', touchStart, false);
        wrapEle.addEventListener('touchmove', touchMove, false);
        wrapEle.addEventListener('touchend', touchEnd, false);
    }
}

