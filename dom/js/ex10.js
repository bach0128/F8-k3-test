btn = document.querySelector(".btn")
content = document.querySelector(".content")

btn.addEventListener('click', function(e) {
    content.innerHTML += `
    <button class="remove"> Delete</button>
    `
})

content.addEventListener('click', function(e) {
    if (e.target.classList.contains("remove")) {
        e.target.remove()
    }
})

var link = document.querySelector(".link")

link.addEventListener('click', function(e) {
    e.preventDefault()
    this.href()
})