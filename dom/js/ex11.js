
var input = document.querySelector("input")

document.addEventListener('dblclick', function() {
    input.style.display = "none"
})

btn = document.querySelector(".btn")

btnRemoves = document.querySelectorAll(".todo .remove")

btnRemoves.forEach(btnRemove => {
    btnRemove.addEventListener('click', function(e) {
        e.target.parentElement.remove()
    })
});

// form1.addEventListener("submit", (e)=>{
//     e.preventDefault()
//     input.disabled = true
// })

var menu = document.querySelector(".menu")
var menuList = menu.children;
Array.from(menuList).forEach(function(a) {
    if (a.children.length > 1) {
        console.log(a);
        a.classList.add("has-children")
    }
})
// if (menuListList.length > 2) {
//     menuList.classList.add("has-children")
// }

