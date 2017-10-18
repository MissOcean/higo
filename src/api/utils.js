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
export function goBackToTop(duration = 400) {
    let html = document.documentElement;
    let inteval = 20,
        distance = html.scrollTop * inteval / duration;

    let timer = setInterval(() => {
        html.scrollTop -= distance
        if (html.scrollTop <= 0) clearInterval(timer)
    }, inteval)
    return timer;
}