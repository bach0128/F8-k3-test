var email = "Xuanbach@gmail.com";

var username = email.slice(0, email.indexOf("@"))
console.log(username)

var fullName = "tRAN xUAN bACH"

var fullName = fullName.charAt("0").toUpperCase() + fullName.slice(1);
for (var i = 0; i < fullName.length; i++) {
    var char = fullName.charAt(i)
    var nextChar = fullName.charAt(i+1)

    if (char === " " && nextChar !== " ") {
        var index = i + 1;
        fullName = fullName.slice(0, index) + nextChar.toLocaleUpperCase() + fullName.slice(index + 1);
    }
}

console.log(fullName)

var keyword = "Lorem";
var content = `Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.`;



var position = content.toLowerCase().indexOf(keyword.toLowerCase());
var result = "";
var count = 0;
    while (position !== -1) {
    result = result + content.slice(0, position) 
    + `<span>${content.slice(position,position + keyword.length)}</span>`;

    content = content.slice(position + keyword.length);

    position = content.toLowerCase().indexOf(keyword.toLowerCase());
    count++
    }

result = result + content;

var title = `<p>Tim kiem voi tu khoa <b>${keyword}</b></p>`
var bottom = `<p>Da tim thay <b>${count}</b> ket qua voi tu khoa ${keyword}</p>`
document.write(title + result + bottom)

