var handleClick = function () {
    alert('Dang ky khoa hoc thanh cong')
}

var handleInput = function () {
    alert('Ban dang go')
}

// Event listener

var btn = document.querySelector(".btn")

btn.addEventListener("click", handleClick)

btn.addEventListener("click", function() {
    console.log("Hanh dong 2");
})

var finishBtn = document.querySelector(".finish")

finishBtn.addEventListener('click', function() {
    console.log("Da hoan thanh dat hang");
    btn.removeEventListener("click", handleClick)
})