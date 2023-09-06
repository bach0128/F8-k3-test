// Thuộc tính có sẵn và thuộc tính tự tạo cho thẻ html

// Thuộc tính 

link = document.querySelector('.link')

console.log(link.dataset);

// update gia tri thuoc tinh
link.title = "trang chu google"

console.log(link.title);

// giá trị mặc định 1 thuộc tính là chuỗi rỗng


//  data attribute

link.getAttribute("data-count")
console.log(link.dataset.count);
console.log(link.dataset.indexNumber);

link.setAttribute("data-count", 10)

content = document.querySelector(".content")

// add new class
content.classList.add("abc")

// remove class
content.classList.remove('abc')

// check class exist

console.log(content.classList.contains('abc'));

//  class toggle => add class if no exist or remove class if exist

content.classList.toggle("red")