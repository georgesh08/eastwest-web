var before_loadtime = new Date().getTime();
window.onload = function () {
    var after_loadtime = new Date().getTime();
    var pgloadtime = (after_loadtime - before_loadtime) / 1000;

    document.getElementById("loadTime").innerHTML = "Page load time is " + pgloadtime + " seconds";
}
