// trước khi thao tác với các thẻ html : tạo được element

// DOM Element: tạo element (Object) từ các thẻ có sẵn 


/** 
 * 1. document.getElementById(id)
 * - chỉ truy xuất được thẻ đầu tiên (lấy số ít)
 * 
 * 2. document.getElementsByClassName(className)
 * - truy xuất thông qua class
 * - Trả về 1 danh sách(HTML Collection)
 * - Muốn tương tác => cần lặp để truy cập tới từng element
 * 
 * 3. document.getElementsByTagName()
 *-  truy xuất thông qua tên thẻ HTML
 *- Trả về 1 danh sách(HTML Collection)
 *- Muốn tương tác => cần lặp để truy cập tới từng element

    4. document.querySelector(selector)
     * - truy xuất thông qua css selector
     * - chỉ truy xuất được thẻ đầu tiên (lấy số ít)
    
    5. document.querySelectorAll(selector)
    * Trả về 1 danh sách Nodelist
 */

    var titleList = document.getElementsByClassName('title');
    var headingList = document.getElementsByTagName("h1");
    var titleList2 = document.querySelectorAll(".title");
const newLocal = "green";
titleList2.forEach(function (title) {
    title.style.color = newLocal;
});

var heading1 = document.querySelector(".content>.heading");
console.log(heading1);

    heading1.style.color = "red";