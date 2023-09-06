
seeModal = document.querySelector(".see")

modal = document.querySelector(".wrap .modal")
hiddenModal = modal.querySelector(".close")

console.log(modal);
seeModal.addEventListener("click", function() {
    modal.classList.add("active")
})

hiddenModal.addEventListener("click", function() {
    modal.classList.remove("active")
})

modalOverlay = document.querySelector(".overlay")

modalOverlay.addEventListener("click", function() {
    modal.classList.remove("active")
})
