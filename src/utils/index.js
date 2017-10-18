export let goToTop = (ele) => {
    clearInterval(ele.timer);
    let win = document.documentElement || document.body;
    let duration = win.scrollTop;
    let step = duration / 20;
    console.log(win.scrollTop);
    ele.timer = setInterval(() => {
        duration -= step;
        win.scrollTop = duration;
    }, 10)
};