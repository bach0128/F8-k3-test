// DOM HTML : thao tac voi noi dung , thuoc tinh html


var content = document.querySelector(".content")

// 1. Lay noi dung trong the HTML 

console.log(content.innerHTML);

// 2. Lay noi dung trong the html

console.log(content.innerText);

// 3. Lay noi dung trong the html (chỉ lấy text nhưng lại giữ nguyên khoảng trắng)

console.log(content.textContent);

// 4. Lay noi dung bao gom element dang tac dong

console.log(content.outerHTML);

content.innerHTML = `<h1>Javascript khong kho</h1>`

content.innerText = `<h1>Javascript qua kho</h1>`

// thay the toan bo content = <h1></h1>
content.outerHTML = `<h1>Javascript qua kho</h1>`


upBtn = document.querySelector(".up")
downBtn = document.querySelector(".down")
numberText = document.querySelector(".number")

var number = numberText.outerText

console.log(number);

upBtn.addEventListener("click", function() {
    numberText.innerHTML = ++number
    let start = upBtnCount.outerText
    upBtnCount.innerText = ++start
    upBtnCount = this.querySelector("span")
})

downBtn.addEventListener("click", function() {
    numberText.innerHTML = --number
    downBtnCount.innerText = ++start
    downBtnCount = this.querySelector("span")
    let start = downBtnCount.outerText

})



