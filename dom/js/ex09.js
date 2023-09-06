btn = document.querySelector(".btn")
var offsetX,offsetY;
var handleDrag = function(e) {
    var left = e.clientX;
    var top = e.clientY;
    var css = {
        position: "relative",
        top: `${top - offsetY}px`,
        left: `${left - offsetX}px`,
    };
    Object.assign(btn.style, css)
}

var isDrag = false;

document.addEventListener('mouseup', function(e) {
    isDrag = false;
})

btn.addEventListener('mousedown', function(e) {
    if (e.which === 1) {
        isDrag = true
    }
    offsetX = e.offsetX;
    offsetY = e.offsetY;

})

document.addEventListener("mousemove", function(e) {
    if (isDrag) {
        handleDrag(e)
        document.querySelector("html").style.cursor = "move"
    }
})