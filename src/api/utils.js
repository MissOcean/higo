/* utils */
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
