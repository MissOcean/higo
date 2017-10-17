+function () {
    window.config = {
        htmlfontSize: 50
    }
    let desW = 750;
    let doc = document.documentElement;

    function refreshRem() {
        let size
        let winW = doc.clientWidth;
        if (winW >= desW) {
            window.config.htmlfontSize = size = 100
        } else {
            window.config.htmlfontSize = size = 100 / (desW / winW)
        }
        doc.style.fontSize = size + 'px';
    }

    refreshRem();
    window.addEventListener('resize', refreshRem);
}()
