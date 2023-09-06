var content = document.querySelector(".content")

// content.style = "color: red; font-weight: 600"
// content.style.fontWeight = "bold"
// content.style.fontSize = "30px"

var css = {
    height: "300px",
    color: "blue",
    fontSize: "40px",
    fontStyle: "Italy",
    backgroundImage: "url(https://fastly.picsum.photos/id/628/200/300.jpg?hmac=q1gczEwKPuYV4RUOJycv37OCQoY0NUsJoI4qLvGBCGU)",
    transition: "all .4s ease",
    transform: "translateX(20px)"
}

Object.assign(content.style, css)

btn = document.querySelector(".btn")

btn.addEventListener('click', function() {
    if (!content.style.display) {
        content.style.display = 'none';
        btn.innerText = 'Show'
    } else {
        content.style.display = ""
        btn.innerText = 'Hidden'
    }
})