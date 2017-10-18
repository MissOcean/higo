/**
 * Created by Administrator on 2017/7/11.
 */
var utils = (function () {




    //类数组转 数组
    /***
     *
     * @param likeAry
     * @returns {*}
     */
    function likeAryToAry(likeAry) {
        try {
            return [].slice.call(likeAry, 0);
        } catch (e) {
            var ary = [];
            for (var i = 0; i < likeAry.length; i++) {
                ary.push(likeAry[i]);
            }
            return ary;
        }
    }


    //将json字符串转换为json对象
    /***
     *
     * @param data
     */
    function jsonParse(data) {
        'json' in window ? JSON.parse(data) : eval('(' + data + ')');
    }


    //获取或设置针对页面的盒模型属性
    /***
     *
     * @param attr
     * @param val
     * @returns {*}
     */
    function win(attr, val) {
        if (typeof val === 'undefined') {
            return document.documentElement[attr] || document.body[attr];
        } else {
            document.documentElement[attr] = val;
            document.body[attr] = val;
        }
    }


    //获取一个元素距离页面的上偏移，左偏移量
    /***
     *
     * @param ele
     * @returns {{l: (Number|number), h: (Number|number)}}
     */
    function offset(ele) {
        var p = ele.offsetParent;
        var l = ele.offsetLeft;
        var h = ele.offsetTop;
        while (p.offsetParent) {
            if (navigator.userAgent.indexOf('MSIE 8.0') === -1) {
                l += p.clientLeft;
                h += p.clientTop;
            }
            l += p.offsetLeft;
            h += p.offsetTop;
            p = p.offsetParent;
        }
        return {
            l: l, h: h
        };
    }


    //获取css属性的兼容写法
    /***
     *
     * @param ele
     * @param attr
     */
    function getCss(ele, attr) {
        var val;
        if ('getComputedStyle' in window) {
            val = window.getComputedStyle(ele, null)[attr];
        } else {
            if (attr === 'opacity') {
                val = ele.currentStyle['filter'];
                var reg = /alpha\(opacity=((?:\d|[1-9]\d+)(?:\.\d+))?\)/;
                val = reg.test(val) ? RegExp.$1 / 100 : 1;
            }
            val = ele.currentStyle[attr];
        }
        var reg1 = /^[+-]?(\d|[1-9]\d+)(\.\d+)?(em|rem|px|pt)?$/;
        return reg1.test(val) ? parseFloat(val) : val;
    }


    //设置css属性的兼容写法
    /***
     *
     * @param ele
     * @param attr
     * @param val
     */
    function setCss(ele, attr, val) {
        var reg = /width|height|left|right|top|bottom|margin(Left|Right|Top|Bottom)/;
        if (reg.test(attr)) {
            if (!isNaN(val)) {
                val += 'px';
            }
        }
        if (attr === 'opacity') {
            ele.style[attr] = val;
            ele.style['fifter'] = val;
            return;
        }
        if (attr === 'float') {
            ele.style.cssFloat = val;
            ele.style.styleFloat = val;
        }
        ele.style[attr] = val;
    }


    //批量设置css属性的兼容写法
    /***
     *
     * @param ele
     * @param attr
     * @param val
     */
    function setCsss(ele, attr, val) {
        if (typeof attr === 'object') {
            for (var k in attr) {
                setCss(ele, k, attr[k]);
            }
        } else {
            setCss(ele, attr, val);
        }
    }


    //去掉字符串的首尾空格的兼容写法
    String.prototype.myTrim = function () {
        var reg = /^\s+|\s+$/;
        return this.replace(reg, '');
    };
    //去掉字符串中多余空格
    String.prototype.removeSpace = function () {
        var reg = /\s+/g;
        return this.trim().replace(reg, ' ');
    };
    //字符串以空格符为间隔转化为数组
    String.prototype.toArray = function () {
        return this.removeSpace().split(/\s+/);
    };


    //通过类名获取元素的兼容写法
    /***
     *
     * @param cn
     * @param context
     * @returns {Array}
     */
    function getElesByClass(cn, context) {
        context = context || document;
        var eles = context.getElementsByTagName('*');
        var cnAry = cn.trim().split(' ');
        console.log(cnAry);
        console.log(eles);
        for (var i = 0; i < cnAry.length; i++) {
            var reg = new RegExp('\\b' + cnAry[i] + '\\b');
            console.log(reg);
            var ary = [];
            for (var j = 0; j < eles.length; j++) {
                reg.test(eles[j].className) ? ary.push(eles[j]) : null;
            }
            eles = ary;
        }
        return ary;
    }


    //判断某个元素是否具有某个属性
    /***
     *
     * @param ele
     * @param cn
     * @returns {boolean}
     */
    function hasClass(ele, cn) {
        var reg = new RegExp('\\b' + cn.myTrim() + '\\b');
        return reg.test(ele.className);
    }


    //给某个元素添加一个或多个属性
    /***
     *
     * @param ele
     * @param cn
     */
    function addClass(ele, cn) {
        var cnAry = cn.toArray();
        for (var i = 0; i < cnAry.length; i++) {
            if (!hasClass(ele, cnAry[i])) {
                ele.className += ' ' + cnAry[i];
            }
        }
    }


    //将某个元素的一个或多个属性移除
    /***
     *
     * @param ele
     * @param cn
     */
    function removeClass(ele, cn) {
        var cnAry = cn.toArray();
        for (var i = 0; i < cnAry.length; i++) {
            if (hasClass(ele, cnAry[i])) {
                var reg = new RegExp('\\b' + cnAry[i] + '\\b');
                ele.className = ele.className.replace(reg, ' ');
            }
        }
        ele.className = ele.className.removeSpace();
    }


    //判断一个元素的一个或多个属性是否存在，存在的话就移除，不存在则添加
    /***
     *
     * @param ele
     * @param cn
     */
    function toggleClass(ele, cn) {
        var cnAry = cn.toArray();
        for (var i = 0; i < cnAry.length; i++) {
            var cur = cnAry[i];
            if (hasClass(ele, cur)) {
                removeClass(ele, cur);
            } else {
                addClass(ele, cur);
            }
        }
    }

//获取某个元素的所有元素子节点（其实children没有兼容性，故该方法不实用）
    /***
     *
     * @param ele
     * @returns {Array}
     */
    function children(ele) {
        var childNodes = ele.childNodes;
        var childAry = [];
        var n = 0;
        while (n < childNodes.length) {
            if (childNodes[n].nodeType === 1) {
                childAry[childAry.length] = childNodes[n];
            }
            n++;
        }
        return childAry;
    }


    //获取某个元素的前一个哥哥元素节点
    /***
     *
     * @param ele
     * @returns {*|Node}
     */
    function prevEle(ele) {
        var p = ele.previousSibling;
        while (p && p.nodeType !== 1) {
            p = p.previousSibling;
        }
        return p;
    }

//获取某个元素的所有哥哥元素节点，返回一个数组
    /***
     *
     * @param ele
     * @returns {Array}
     */
    function prevEles(ele) {
        var p = ele.previousSibling;
        var ary = [];
        while (p) {
            if (p.nodeType === 1) {
                ary.unshift(p);
            }
            p = p.previousSibling;
        }
        return ary;
    }


    //获取某个元素的下一个弟弟元素节点
    /***
     *
     * @param ele
     * @returns {*|Node}
     */
    function nextEle(ele) {
        var n = ele.nextSibling;
        while (n && n.nodeType !== 1) {
            n = n.nextSibling;
        }
        return n;
    }


    //获取某个元素的所有弟弟元素节点
    /***
     *
     * @param ele
     * @returns {Array}
     */
    function nextEles(ele) {
        var n = ele.nextSibling;
        var ary = [];
        while (n) {
            if (n.nodeType === 1) {
                ary.push(n);
            }
            n = n.nextSibling;
        }
        return ary;
    }


    //获取某个元素在其兄弟元素节点中的索引
    /***
     *
     * @param ele
     * @returns {Number}
     */
    function getEleIndex(ele) {
        return prevEles(ele).length;
    }


    //获取指定元素的第一个元素子节点
    /***
     *
     * @param ele
     * @returns {*|Node}
     */
    function firstElechild(ele) {
        var first = ele.firstChild;
        while (first && first.nodeType !== 1) {
            first = first.nextSibling;
        }
        return first;
    }


    //获取指定元素的最后一个元素子节点
    /***
     *
     * @param ele
     * @returns {*|Node}
     */
    function lastEleChild(ele) {
        var last = ele.lastChild;
        while (last && last.nodeType !== 1) {
            last = last.previousSibling;
        }
        return last;
    }


    //将指定元素添加到指定容器最前端
    /***
     *
     * @param ele
     * @param container
     */
    function appendFirstChild(ele, container) {
        if (container.children.length) {
            container.insertBefore(ele, firstElechild(container));
        } else {
            container.appendChild(ele);
        }
    }


    //将指定元素添加到另一个指定元素的后面
    /***
     *
     * @param ele
     * @param tarEle
     */
    function insertAfter(ele, tarEle) {
        var parent = tarEle.parentNode;
        var tarNext = nextEle(tarEle);
        if (tarNext) {
            parent.insertBefore(ele, tarNext);
        } else {
            parent.appendChild(ele);
        }
    }


    /***
     *
     * @param ele
     */
    function drag(ele) {
        ele.onmousedown = function (e) {
            e = e || event;
            this.l = e.clientX - this.offsetLeft;
            this.t = e.clientY - this.offsetTop;
            this.maxL = utils.win('clientWidth') - this.offsetWidth;
            this.maxT = utils.win('clientHeight') - this.offsetHeight;
            document.onmousemove = move.$bind(ele);
            document.onmouseup = function () {
                this.onmousemove = null;
                this.onmouseup = null;
            }
        };

        function move(e) {
            e = e || event;
            var l = e.clientX - this.l;
            var t = e.clientY - this.t;
            if (l <= 0) {
                l = 0;
            } else if (l >= this.maxL) {
                l = this.maxL;
            }
            if (t <= 0) {
                t = 0;
            } else if (t >= this.maxT) {
                t = this.maxT;
            }
            this.style.left = l + 'px';
            this.style.top = t + 'px';
        }
    }

    Function.prototype.$bind = function (context) {
        var that = this;
        var params = [].slice.call(arguments, 1);
        return function () {
            var arr = params.length ? params : arguments;
            that.apply(context, arr);
        }
    };

    return {
        likeAryToAry: likeAryToAry,
        jsonParse: jsonParse,
        win: win,
        offset: offset,
        getCss: getCss,
        setCss: setCss,
        setCsss: setCsss,
        getElesByClass: getElesByClass,
        hasClass: hasClass,
        addClass: addClass,
        removeClass: removeClass,
        toggleClass: toggleClass,
        children: children,
        prevEle: prevEle,
        prevEles: prevEles,
        nextEle: nextEle,
        nextEles: nextEles,
        getEleIndex: getEleIndex,
        firstEleChild: firstElechild,
        appendFirstChild: appendFirstChild,
        insertAfter: insertAfter,
        drag: drag
    }
})();