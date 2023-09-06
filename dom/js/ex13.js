
var checkAll = document.querySelector(".checkbox-all input")

checkItems = document.querySelectorAll(".checkbox input")

checkItems.forEach(checkItem => {
    checkItem.addEventListener('change', function(e) {
        var status = Array.from(checkItems).every(function(item) {
            return item.checked
        })
        checkAll.checked = status
    })
});

checkAll.addEventListener('change', function() {
    if (!this.checked) {
        checkAll.checked
    }
    checkItems.forEach(checkItem => {
        checkItem.checked = this.checked
    })
})