
btn = document.querySelector(".btn")

btn.addEventListener('mousedown', function(e) {
    if (e.which === 1) {
        this.style.background = "red"
    }
})

var nameEl = document.querySelector(".name")

nameEl.addEventListener('keyup', function(e) {
    if (e.key === "Enter") {
        console.log(this.value);
    }
})

document.addEventListener("keyup", function(e) {
    if (e.ctrlKey && e.key === "Enter") {
        document.body.style.background = "red"
    } else if ( e.key === "Enter") {
        document.body.style.background = "initial"
    }
})

