
var total = 1000000;

var luong = (total > 50000000) ? (total *= 0.85) : ( total > 5000000 ? total *= 0.95 : total *= 0.97 )

console.log(luong)