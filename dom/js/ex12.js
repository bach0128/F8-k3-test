

var products = document.querySelector(".products");
btnNext = document.querySelector(".next")
btnPrev = document.querySelector(".prev")

var productActive = document.querySelector(".active")
console.log(productActive.nextElementSibling.previousElementSibling);

var productFirst = productActive;
var productLast = products.lastElementChild;

var handleNext = function() {
    var nextElement = productActive.nextElementSibling;
    if (nextElement === null) {
        nextElement = productFirst
    }
    nextElement.classList.add("active")
    productActive.classList.remove("active")

    productActive = nextElement
}

var handlePrev = function() {
    var prevElement
    if (productActive === productFirst) {
        prevElement = productLast
    } else {
        prevElement = productActive.previousElementSibling
    }
    
    prevElement.classList.add("active")
    productActive.classList.remove("active")

    productActive = prevElement
}

btnNext.addEventListener('click', handleNext())

btnPrev.addEventListener('click', handlePrev())

document.addEventListener('keyup', function(e) {
    if (e.key === "ArrowRight" || e.key === "ArrowDown") {
        handleNext()
    } else if (e.key === "ArrowLeft" || e.key === "ArrowUp") {
        handlePrev()
    }
})