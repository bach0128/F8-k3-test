// Number: kieu du lieu nguyen thuy
console.log([Number])

var k = 10;

if (typeof a === "number") {
    console.log("Day la so")
}

if (Number.isInteger(a)) {
    console.log("Day la so nguyen")
}

// Số NaN (not a number) 
// Tính toán các biểu thức số học mà có 1 toán hạng mang giá trị NaN hoặc do quá trình tự động ép kiểu 

var b = "F8";
var c = 10;
var d = b - c;
if (!Number.isNaN(d)) {
    console.log(d)
} else {
    console.log("Khong thuc hien duoc phep tinh")
}

//So infinity
// chia cho so 0 ( 10 / 0 )

if (a === Infinity) {
    console.log("Day la so infinity")
}

if (typeof a === "number" && !Number.isNaN(a) && a !== Infinity) {
    console.log("Day la so")
}

// Ep kieu (+)
var a = "10.8a123";
// Ep sang kieu so nguyen
// a = Number.parseInt(a)

// Ep sang kieu so thuc
// a = Number.parseFloat(a)

// Ep kieu so ( so nguyen, so thuc)
// a = +a;

var numbers = [5, 3, 1, 8, 4]
var total = 0;
for (index in numbers) {
    numbers[index] = +numbers[index];
    if (!Number.isNaN(numbers[index]) && numbers[index] % 2 === 0) {
        total += numbers[index]
    }
}
console.log(total)

// toFixed() : Lay so chu so phan thap phan va tra ve 1 chuoi
var u = 10.4525;
u.toFixed(0)

// toString() => chuyen so thanh chuoi (dung de dem xem co bao nhieu so)

// Dinh dang so ()
var price = 100010000100.777;
price = price.toLocaleString("en-US", {
    style: "currency",
    currency: "EUR"
});
console.log(price)

// Math




