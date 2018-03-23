export let goToTop = (ele) => {
    clearInterval(ele.timer);
    let win = document.documentElement || document.body;
    let duration = win.scrollTop;
    let step = duration / 30;
    ele.timer = setInterval(() => {
        duration -= step;
        if (duration <= 0) {
            clearInterval(ele.timer);
            win.scrollTop = 0;
        }
        win.scrollTop = duration;
    }, 10)
};

export function upLoadMore(callback) {
    let timer;
    let html = document.documentElement;
    let f = (event) => {
        if (timer) clearTimeout(timer);
        timer = setTimeout(() => {

            let scrollTop = html.scrollTop;
            let winHeight = html.clientHeight;
            let contentHeight = html.scrollHeight;
            if (winHeight + scrollTop + 10 >= contentHeight) {
                callback();
            }
        }, 50);
    }
    document.addEventListener('scroll', f);
    return function () {
        document.removeEventListener('scroll', f)
    }
}

export function downRefresh(element, callback) {
    let body = document.body || document.documentElement;
    body.addEventListener('touchstart', touchStart);
    let startY;//开始触摸的纵坐标
    let touchDistance;//滑动的总距离
    function touchStart(event) {
        if (element.offsetTop == 0 && element.scrollTop == 0) {
            //取得的是这个点距离顶部的距离
            startY = event.targetTouches[v0].pageY;
            touchDistance = 0;
            body.addEventListener('touchmove', touchMove);
            body.addEventListener('touchend', touchEnd);
        }

        function touchMove(event) {
            let pageY = event.targetTouches[0].pageY;
            if (pageY > startY) {//下拉
                element.style.top = (pageY - startY) + 'px';
                touchDistance = pageY - startY;
            } else {
                body.removeEventListener('touchmove', touchMove);
                body.removeEventListener('touchend', touchEnd);
            }
        }

        function touchEnd() {
            body.removeEventListener('touchmove', touchMove);
            body.removeEventListener('touchend', touchEnd);
            if (touchDistance > 0) {
                let timer = setInterval(() => {
                    element.style.top = (element.offsetTop - 1) + 'px';
                    if (element.offsetTop == 56) {
                        clearInterval(timer);
                    }
                }, 5);
                if (touchDistance > 50)
                    callback();
            }

        }
    }
}