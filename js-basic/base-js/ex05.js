
var welcomeMessage = "Xuan Bach F8"

var getMessage = function(msg) {
    console.log(`getMessage`)
    var displayMessage = function() {
        console.log(`Xin chao: ${msg}`)
    }
    displayMessage()
}

getMessage("F8")

setTimeout(() => {
    console.log(`${welcomeMessage}`)
}, 2000);

// closure

var sum = function(a) {
    return function(b) {
        return a + b
    }
}

var add = sum(10)
console.log(add(10)) 

// settimeout

setTimeout(function(name) {
    console.log("Xin chao F8")
}, 2000, "Xuan Bach");

// setInterval  lap di lap lai sau 1 khoang thoi gian
function move() {
    const element = document.getElementById("myBar");
    let width = 0;
    let id = setInterval(frame, 10);
    function frame() {
        if (width == 100) {
        clearInterval(id);
        } else {
        width++;
        element.style.width = width + '%';
        } 
    }
}

var tinhSum = (n) => {
    if (n === 1) {
        return 1
    }
    return n + tinhSum(n - 1)
}

console.log(tinhSum(10))