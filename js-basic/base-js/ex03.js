

for (var i = 0; i <20; i++) {
    console.log("Hay lam ddm")
}

var N = 5;
var s = 0;

for (var i = 1; i <= N; i++) {
    s += i;
}

console.log(`${s}`)

var total = 1;
var subTotal = 0;

for (var i = 1; i <= N; i++) {
    total *= i;
    subTotal += total;
}

console.log(`${subTotal}`)

for (var i = 1; i <= N; i++) {
    document.write(`<br />`);
    for (var j = 1; j <= i; j++) {
        document.write(`*`);
    }
}