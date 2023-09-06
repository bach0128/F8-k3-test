/*  
DOM event 
- Mỗi thẻ html có các event nhất định
- Có event xuất hiện trong tất cả các thẻ 
- Có event xuất hiện trong 1 số thẻ nhất định
Vd 
- click
- dblclick
- mousemove
- mouseout
*/

var btn = document.querySelector('.btn');

btn.onclick = function() {
    console.log("Sign in");
}

btn.onmouseout = function() {
    alert(btn.innerHTML);
}

window.onscroll = function() {
    console.log('Duong ga lam');
}